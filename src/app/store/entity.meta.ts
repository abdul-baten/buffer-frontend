import { EntityMetadataMap } from '@ngrx/data';

const entity_metadata: EntityMetadataMap = {
  connection: {},
  draft: {},
  facebook_insight: {},
  instagram_insight: {},
  post: {},
  user: {}
};

const plural_names = {};
// eslint-disable-next-line @typescript-eslint/naming-convention

export const entity_config = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  entityMetadata: entity_metadata,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pluralNames: plural_names
};
