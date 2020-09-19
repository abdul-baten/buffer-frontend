import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Connection: {},
  Insight: {},
  Post: {},
  User: {},
};

const pluralNames = {};

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
