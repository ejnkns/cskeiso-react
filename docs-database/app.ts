import { downloadFile } from "./utils/download";
import { readFileSync, writeFile } from 'fs';
import { ContentObject, ContentTypes, Link, Para } from "../client/src/common/propTypes";

const actFourUrl = "https://docs.google.com/document/d/1Xz3HjL7dJ-ab3bQnfqEFXFlZYxVBa_1MXV7WyLQ_iMg/export?format=txt"
const actFourPath = "../client/src/work/Act-4/ActFour.json";
const fiveWaysUrl = "https://docs.google.com/document/d/1KXAmis1n1FzduV6sNkzHhmWdInSfSBjIsH2wQXU0dn4/export?format=txt"
const fiveWaysPath = "../client/src/work/5_WAYS/FiveWays.json";
// below from React-Player: https://github.com/CookPete/react-player/blob/master/src/patterns.js
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_VIMEO = /vimeo\.com\/.+/;
const MATCH_URL_VIDEO = new RegExp(MATCH_URL_YOUTUBE.source + "|" + MATCH_URL_VIMEO.source);
const MATCH_URL_IMAGE = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
const MATCH_LAST_PARENTHESES = /\(([^)]*)\)[^(]*$/;
const MATCH_MARKDOWN_URL = /\[(.*?)\]\((.*?)\)/g; // match[0] = "(text)[url]", match[1] = "text", match[2] = "url", match[4] = "(other text)[other_url]", etc.
const LINE_BREAK = "(line break)"
const SPLIT_NEWLINE = /[\r\n]+/;

async function docsUrlToContentObjectArrayJSON(url: string, filePath: string): Promise<string> {

    const tempFilePath = filePath.split('.')[0] + ".temp.txt";
    await downloadFile(url, tempFilePath).catch(error => console.log(error));
    let data = readFileSync(tempFilePath, 'utf8');

    let content: ContentObject[] = [];
    let prevType: ContentTypes | null = null;
    for (const line of data.split(SPLIT_NEWLINE)) {
        if (line.match(MATCH_URL_IMAGE)) {
            content.push(new ContentObject(ContentTypes.Image, line));
            prevType = ContentTypes.Image;
        } else if (line.match(MATCH_URL_VIDEO)) {
            content.push(new ContentObject(ContentTypes.Video, line));
            prevType = ContentTypes.Video;
        } else if (line === LINE_BREAK) {
            content.push(new ContentObject(ContentTypes.Break, ""));
            prevType = ContentTypes.Break;
        } else {
            let paraText: string[] = line.split(MATCH_MARKDOWN_URL);
            // Para, possibly with links within (links always wrapped in a Para)
            // split links from para
            // split each element into text and url
            let i = 0;
            let paraContent: (Link | string)[] = [];
            let linkUrl: string;
            paraText.forEach(el => {
                el.trim();
                // pattern is para -> link text -> link url
                if (i % 3 == 0) {
                    paraContent.push(el);
                } else if (i % 3 == 1) {
                    linkUrl = el;
                } else {
                    let link: Link = new Link(el, linkUrl)
                    paraContent.push(link);
                }
                i++;
            });
            if (prevType == ContentTypes.Para) {
                // replace previous para with new para with added content
                let prevContentObject = content.pop();
                let prevPara = prevContentObject?.data;
                // have to check for typescript to be happy
                if (prevPara instanceof Para) {
                    paraContent= prevPara.content.concat(paraContent)
                }
            } 
            content.push(new ContentObject(ContentTypes.Para, new Para(paraContent)));
            prevType = ContentTypes.Para;
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

//docsUrlToContentObjectArrayJSON(fiveWaysUrl, fiveWaysPath).then(result => console.log(result));
docsUrlToContentObjectArrayJSON(actFourUrl, actFourPath).then(result => console.log(result));

/*
            // it's a Para, possibly with links inside
            if (prevType == ContentTypes.Para) {
                // add this content to the previous para content
                let prevPara: ContentObject = content[content.length - 1];
            }
            // array splitting paragraph from [url]
            const paraArray: string[] = line.split(/\[|\]/);
            
            // build the paragraph content array for new Para(paraContent);
            let paraContent: (string | Link)[] = [];
            // the text inside parens that will be the Link text
            let preLink: string = null;
            let i = 0;
            paraArray.forEach((el: string) => {
                el = el.trim();
                if (preLink && preLink[preLink.length - 1] == ')') {
                    // line is a link
                    // remove previous word from paraContent
                    let prevText: string = null;
                    if (i > 0) {
                        prevText = paraArray[i - 1];
                        // remove parentheses from prevText, aka start and end chars
                        
                        prevText = prevText.substring(1, prevText.length - 1);
                        paraContent[i-1] = prevText;
                    }
                    paraContent.push(new Link(el, prevText));
                } else {
                    // text
                    paraContent.push(el);
                }
                // Link text must be within parens
                preLink = (el.split("(").slice(-1))[0];
                i++;
            });
            content.push(new ContentObject(ContentTypes.Para, new Para(paraContent)));
            prevType = ContentTypes.Para;
        }
*/