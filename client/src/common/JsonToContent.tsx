import { ContentObject, Link, Para, ContentTypes, jsonType } from "./propTypes";

export function getContent(json: jsonType): ContentObject[] {
    let len = json.length;
    let c: ContentObject[] = [];
    for (let i = 0; i < len; i++) {
        let e = json[i];
        if (e.contentType !== ContentTypes.Para) {
            // no nesting
            c[i] = new ContentObject(e.contentType, e.data);
        } else if (e.data instanceof Object) {
            // have to check instance of or typescript doesn't like it
            // nesting
            let paraContent: (string | Link)[] = [];
            e.data.content.forEach((el: string | Link) => {
                if (typeof (el) == "string") {
                    paraContent.push(el);
                } else {
                    paraContent.push(new Link(el.url, el.text));
                }
                c[i] = new ContentObject(e.contentType, new Para(paraContent));
            });
        }
    }
    return (c);
}

function getJson(url: string): ContentObject[] {
  let content: ContentObject[] = [];
  fetch(url)
    .then(res => res.json())
    .then((out) => {
      let json = JSON.parse(out);
      console.log('Checkout this JSON! ', out);
    })
    .catch(err => { throw err });
  return (content);
}