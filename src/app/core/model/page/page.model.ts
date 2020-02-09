interface PagePropertiesInterface {
  PAGE_ROUTE: string;
  PAGE_TITLE: string;
}

interface PageInterface {
  [key: string]: PagePropertiesInterface;
}

export { PageInterface };
