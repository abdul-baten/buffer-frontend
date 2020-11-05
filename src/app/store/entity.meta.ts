import { EntityMetadataMap } from '@ngrx/data';

const entity_metadata: EntityMetadataMap = {
  compose: {},
  connection: {},
  facebook_insight: {},
  instagram_insight: {},
  post: {},
  user: {}
};

const plural_names = {};

export const entity_config = {
  entityMetadata: entity_metadata,
  pluralNames: plural_names
};
