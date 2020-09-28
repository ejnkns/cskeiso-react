export type PageProps = {
    page: string
}

export type TwoColumnProps = {
  page: string;
  column1: string;
  column2: string;
  Rows1: React.FC;
  Rows2: React.FC;
}

export enum ContentTypes {
    Title,
    Para,
    Link,
    Image,
    Video,
    Pdf,
    Html,
    Break
}

export class ContentObject {
    contentType: ContentTypes;
    data: string | Link | Para;

    constructor(contentType: ContentTypes, data: string | Link | Para) {
        this.contentType = contentType;
        this.data = data;
    }
}

export class Para {
    content: (string|Link)[]

    constructor(content: (string|Link)[]) {
        this.content = content;
    }
}

export class Link {
    url: string;
    text: string;

    constructor(url: string, text: string) {
        this.url = url;
        this.text = text;
    }
}

export type OneColumnProps = {
    page: string;
    content: ContentObject[];
}
export class Page {
  name: string;
  path: string;
  docsUrl: string;

  constructor(name: string, path: string, docsUrl: string) {
    this.name = name;
    this.path = path;
    this.docsUrl = docsUrl;
  }
}

export type jsonType =
  ({
    contentType: number;
    data: {
      content: (string | {
        url: string;
        text: string;
      })[];
    };
  } | {
    contentType: number;
    data: string;
  })[];

export type PlayerProps = {
    url: string;
}