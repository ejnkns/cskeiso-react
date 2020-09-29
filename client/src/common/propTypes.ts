import { ContentObject } from "./ContentTypes";

export type PageProps = {
  page: string
}

export type OneColumnProps = {
    page: string;
    content: ContentObject[];
}
export type TwoColumnProps = {
  page: string;
  column1: string;
  column2: string;
  Rows1: React.FC;
  Rows2: React.FC;
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