export interface PagePropertiesInterface {
  ROUTE: string;
  TITLE: string;
}

export interface PageInterface {
  [key: string]: PagePropertiesInterface;
}
