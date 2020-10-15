import { ContentObject } from "gdocs-database";

export type PageProps = {
  page: string
}

export type OneColumnProps = {
    page: string;
    content: ContentObject[];
}

// want to rework this to use ContentObject arrays for each column
export type TwoColumnProps = {
  page: string;
  column1: string; // column1: ContentObject[];
  column2: string; // column2: ContentObject[];
  Rows1: React.FC;
  Rows2: React.FC;
}

export type PlayerProps = {
    url: string;
}