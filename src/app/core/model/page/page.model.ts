interface IPageProperties {
  PAGE_ROUTE: string;
  PAGE_TITLE: string;
  ROUTES?: { [key: string]: IPageProperties };
}

interface IPageRoute {
  [key: string]: IPageProperties;
}

export { IPageRoute };
