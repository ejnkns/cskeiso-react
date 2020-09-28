import { downloadFile } from "./utils/download";
import { readFileSync, writeFile } from 'fs';
import { ContentObject, ContentTypes, Link, Para } from "./utils/contentobjecttypes";

const actFourUrl = "https://docs.google.com/document/d/1Xz3HjL7dJ-ab3bQnfqEFXFlZYxVBa_1MXV7WyLQ_iMg/export?format=txt"
const actFourPath = "../client/src/work/Act-4/ActFour.txt";
const fiveWaysUrl = "https://docs.google.com/document/d/1KXAmis1n1FzduV6sNkzHhmWdInSfSBjIsH2wQXU0dn4/export?format=txt"
const fiveWaysPath = "../client/src/work/5_WAYS/FiveWays.json";
// below from React-Player: https://github.com/CookPete/react-player/blob/master/src/patterns.js
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_VIMEO = /vimeo\.com\/.+/;
const LINE_BREAK = "(line break)"

async function docsUrlToContentObjectArrayJSON(url: string, filePath: string): Promise<string> {

    const tempFilePath = filePath.split('.')[0] + ".temp.txt";
    await downloadFile(url, tempFilePath).catch(error => console.log(error));
    let data = readFileSync(tempFilePath, 'utf8');
    const imgRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    const videoRegex = new RegExp(MATCH_URL_YOUTUBE.source + "|" + MATCH_URL_VIMEO.source);

    let content: ContentObject[] = [];
    for (const line of data.split(/[\r\n]+/)) {
        console.log(line);
        if (line.match(imgRegex)) {
            content.push(new ContentObject(ContentTypes.Image, line));
        } else if (line.match(videoRegex)) {
            content.push(new ContentObject(ContentTypes.Video, line));
        } else if (line === LINE_BREAK) {
            content.push(new ContentObject(ContentTypes.Break, ""));
        } else {
            // it's a Para, possibly with links inside
            const paraArray: string[] = line.split(/\[|\]/);
            let paraContent: (string | Link)[] = [];
            let prevWord: string = null;
            let i = 0;
            paraArray.forEach((el: string) => {
                el = el.trim();
                if (prevWord && (el.substring(0, 4) === "http")) {
                    // line is a link
                    // remove previous word from paraContent
                    if (i > 0) {
                        let prevText: string = paraArray[i - 1];
                        prevText = prevText.replace(/[\W]*\S+[\W]*$/, '');
                        paraContent[i-1] = prevText;
                    }
                    paraContent.push(new Link(el, prevWord));
                } else {
                    // text
                    paraContent.push(el);
                }
                prevWord = (el.split(" ").slice(-1))[0];
                i++;
            });
            content.push(new ContentObject(ContentTypes.Para, new Para(paraContent)));
        }
        
    }
    writeFile(filePath, JSON.stringify(content), (err) => {
        if (err) {
            console.error(err);
        }
    });
    //TODO: delete <filePath>.temp.txt file
    return JSON.stringify(content);
}

docsUrlToContentObjectArrayJSON(fiveWaysUrl, fiveWaysPath).then(result => console.log(result));