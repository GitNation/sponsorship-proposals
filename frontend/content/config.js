if (!process.env.SANITY_ENDPOINT || !process.env.SANITY_TOKEN) {
  throw new Error(`Can't find environment variables: 'SANITY_ENDPOINT' and 'SANITY_TOKEN'.
  Set them in .env file for local development or pass to env when running on CI.
  `);
}

const brandIDs = {
  reactSummit: '8224681e-d99e-45f5-8dfe-14a916a952e9',
  rsre: 'be8fcf13-56e5-40d2-b1f7-337187278ca5',
  JSNation: 'nt8f6wsK8Ivu113FajImcZ',
  JSNationLive: 'O9I27fZboumean9j8TzJit',
  NodeDayUK: 'cmVu3wsUMKKWfaawlUP3gY',
  MLConfEU: '67a82a37-a1a5-4b0f-9bd1-be837d06c00f',
  GraphQLGalaxy: '02288c23-986f-4354-9a5b-dcff000b2ace',
  TestJSSummit: '36a585d8-5dea-43ca-8226-92723eaa5b21',
  NodeCongress: '3c2be5b8-dade-49c0-a681-752cf81ccd6e',
  DevOpsJS: 'b7b358b0-a3d8-4e8c-a025-810066ecc724',
  reactAdvanced: '',
  reactDayBerlin: '',
};

const credentials = {
  endpoint: process.env.SANITY_ENDPOINT,
  token: process.env.SANITY_TOKEN,
};

module.exports = {
  brandIDs,
  credentials,
  isDebug:  true,
};
