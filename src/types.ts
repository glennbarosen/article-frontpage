export interface IArticle {
  type: string;
  width: number;
  url: string;
  title: string;
  imageUrl: string;
}

export interface IRow {
  type: string;
  columns: IArticle[];
}
