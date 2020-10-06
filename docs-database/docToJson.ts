import { downloadFile } from "./utils/download";
import { readFileSync, writeFile } from 'fs';
import { ContentObject, ContentTypes, Link, Para } from "./utils/ContentTypes";

// below from React-Player: https://github.com/CookPete/react-player/blob/master/src/patterns.js
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_VIMEO = /vimeo\.com\/.+/;

const MATCH_URL_VIDEO = new RegExp(MATCH_URL_YOUTUBE.source + "|" + MATCH_URL_VIMEO.source);
const MATCH_URL_IMAGE = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const MATCH_MARKDOWN_URL = /\[(.*?)\]\((.*?)\)/g; // match[0] = "(text)[url]", match[1] = "text", match[2] = "url", match[4] = "(other text)[other_url]", etc.
const LINE_BREAK = "(line break)"
const SPLIT_NEWLINE = /[\r\n][\r\n]/;

// downloads a google doc as a text file, then parses the text file into a ContentObject[]
// google doc has to be formatted correctly: blank lines between content, links in markdown style
export async function docsUrlToContentObjectArrayJSON(url: string, filePath: string): Promise<string> {
    const tempFilePath = "temp.txt";
    await downloadFile(url, tempFilePath).catch(error => console.log(error));
    let data = readFileSync(tempFilePath, 'utf8');

    let content: ContentObject[] = [];
    let prevType: ContentTypes | null = null;
    let prevWasNullLine: boolean = true;
    let i = 0
    for (let line of data.split(SPLIT_NEWLINE)) {
        /*
        console.log("_____________________\nline " + i + ":\n" + line);
        i++;
        */
        if (line.match(MATCH_URL_IMAGE)) {
            content.push(new ContentObject(ContentTypes.Image, line.trim()));
            prevType = ContentTypes.Image;
            prevWasNullLine = false;

        } else if (line.match(MATCH_URL_VIDEO)) {
            content.push(new ContentObject(ContentTypes.Video, line.trim()));
            prevType = ContentTypes.Video;
            prevWasNullLine = false;

        } else {
            // line is Para, possibly with links and newlines within (links always wrapped in a Para)
            let paraContent: (Link | string)[] = [];
            if (line.length == 0) {
                // deal with line breaks
                if (prevWasNullLine && prevType == ContentTypes.Para) {
                    paraContent.push(LINE_BREAK);
                }
                prevWasNullLine = true;
            } else {
                // split links (url and text) from para
                let paraText: string[] = line.trim().split(MATCH_MARKDOWN_URL);
                let i = 0;
                let linkUrl: string;
                paraText.forEach(el => {
                    if (el.length > 0) {
                        //el = el.trim();
                        // can either trim here or add &nbsp;s in common/OneColumn
                        // pattern goes para -> link text -> link url
                        if (i % 3 == 0) {
                            // para
                            paraContent.push(el);
                        } else if (i % 3 == 1) {
                            // link
                            linkUrl = el;
                        } else {
                            // url
                            let link: Link = new Link(el, linkUrl)
                            paraContent.push(link);
                        }
                    }
                    i++;
                });
                if (!prevWasNullLine) {
                    // if there was content before (not a null line), need to add line break
                    paraContent.push(LINE_BREAK);
                }
            }
            if (prevType == ContentTypes.Para) {
                // replace previous para with new para with added text 
                let prevContentObject = content.pop();
                let prevPara = prevContentObject?.data;
                // have to check type for typescript to be happy
                if (prevPara instanceof Para && prevPara.content.length > 0) {
                    paraContent = prevPara.content.concat(paraContent)
                }
            }
            if (paraContent.length > 0) {
                content.push(new ContentObject(ContentTypes.Para, new Para(paraContent)));
                prevType = ContentTypes.Para;
            }
            prevWasNullLine = false;
        }
    }
    writeFile(filePath, JSON.stringify(content), (err) => {
        if (err) {
            console.error(err);
        }
    });
    //TODO: delete temp.txt file
    return JSON.stringify(content); 
}

//docsUrlToContentObjectArrayJSON(fiveWaysUrl, fiveWaysPath).then(result => console.log(result));
//docsUrlToContentObjectArrayJSON(actFourUrl, actFourPath).then(result => console.log(result));