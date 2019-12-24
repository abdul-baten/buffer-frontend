export interface IPageProperties {
  ROUTE: string;
  TITLE: string;
}

export interface IPage {
  [key: string]: IPageProperties;
}
