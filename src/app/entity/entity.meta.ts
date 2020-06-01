import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Connection: {},
  Post: {},
  User: {},
};

const pluralNames = {};

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
