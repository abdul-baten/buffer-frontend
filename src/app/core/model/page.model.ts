// tslint:disable-next-line
interface I_PAGE_PROPERTY {
  PAGE_ROUTE: string;
  PAGE_TITLE: string;
  ROUTES?: { [key: string]: I_PAGE_PROPERTY };
}

// tslint:disable-next-line
export interface I_PAGE {
  [key: string]: I_PAGE_PROPERTY;
}
