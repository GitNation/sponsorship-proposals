// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
// import blockContent from './blockContent'
// import category from './category'
// import post from './post'
// import author from './author'
import Brand from './Brand';
import Feature from './Feature';
import KeyFeature from './KeyFeature';
import Graph from './Graph';
import StatTile from './StatTile';
import Conferences from './Conferences';
import Package from './Package';
import PackageAddon from './PackageAddon';
import { Sponsor, PartnerSlide, PackageSlide } from './ImageTypes';
import RichText from './RichText';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    Brand,
    Feature,
    KeyFeature,
    Graph,
    StatTile,
    Package,
    PackageAddon,
    Sponsor,
    PartnerSlide,
    PackageSlide,
    Conferences,
    RichText,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // blockContent
  ]),
});
