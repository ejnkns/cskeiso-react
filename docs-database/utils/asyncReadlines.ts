// source: https://gist.github.com/rsms/db839311148b9f051acf1c22d69c82ee
import * as fs from 'fs'

//const //print = console.log.bind(console)

function sleep(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

function fopen(filename: string, flags: string | number) {
    return new Promise<number>((resolve, reject) =>
        fs.open(filename, flags, (err, fd) => err ? reject(err) : resolve(fd))
    )
}

function fread(fd: number, buffer: Buffer, offset: number, length: number, position: number | null) {
    return new Promise<number>((resolve, reject) =>
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, _) =>
            resolve(bytesRead))
    )
}

// bufcopy creates a new buffer containing bytes with some additional space
function bufcopy(bytes: ArrayLike<number>, addlSize: number) {
    const size = bytes.length + addlSize
    // const b2 = new Uint8Array(size)
    const b = Buffer.allocUnsafe(size)
    b.set(bytes, 0)
    return b
}


export default async function* readlines(filename: string, encoding: BufferEncoding = 'utf8'): AsyncIterableIterator<string> {
    const fd = await fopen(filename, 'r')

    const BUFSIZE = 512 // should be 4096 in a real implementation
    let buf = Buffer.alloc(BUFSIZE)
    let bufStart = 0

    while (true) {
        const readLimit = buf.length - bufStart
        const bytesRead = await fread(fd, buf, bufStart, readLimit, null)
        ////print('• read', bytesRead, 'bytes')

        if (bytesRead == 0) {
            // happaned to hit EOF perfectly
            break
        }

        ////print('• find lines')

        // find lines
        let lineStart = 0
        let bufEnd = bufStart + bytesRead
        for (let i = 0; i < bufEnd; ++i) {
            const c = buf[i]
            if (c == 0xA) {
                let lineEnd = i
                if (i > 0 && buf[i - 1] == 0xD) {
                    // skip CR before LF
                    lineEnd--
                }
                //print('• found line')
                yield buf.toString(encoding, lineStart, lineEnd)
                // next line start where this line ends
                lineStart = i + 1
            }
        }

        if (bytesRead < readLimit) {
            // last chunk was read
            if (lineStart != bufEnd) {
                // handle final line w/o line terminator
                yield buf.toString(encoding, lineStart)
            }
            break
        } else if (lineStart != bytesRead) {
            // tail of buffer contains an unterminated line
            const partialLineLen = buf.length - lineStart
            //print('• partial line overflow; partialLineLen:', partialLineLen)

            if (partialLineLen > BUFSIZE / 2) {
                // grow buffer
                const buf2 = Buffer.allocUnsafe(buf.length + BUFSIZE)
                //print('• grow buffer; new size:', buf2.length)
                // copy line from old buffer to beginning of new buffer
                buf2.set(buf.subarray(lineStart), 0)
                buf = buf2
            } else {
                // move line to beginning of buffer
                //print('• move in buffer')
                buf.copyWithin(0, lineStart)
            }
            bufStart = partialLineLen
        } else {
            bufStart = 0
        }
    }
}