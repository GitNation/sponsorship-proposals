if (!process.env.SANITY_ENDPOINT || !process.env.SANITY_TOKEN) {
  throw new Error(`Can't find environment variables: 'SANITY_ENDPOINT' and 'SANITY_TOKEN'.
  Set them in .env file for local development or pass to env when running on CI.
  `);
}

const brandIDs = {
  reactSummit: '8224681e-d99e-45f5-8dfe-14a916a952e9',
  JSNation: 'nt8f6wsK8Ivu113FajImcZ',
  JSNationLive: 'O9I27fZboumean9j8TzJit',
  NodeDayUK: 'cmVu3wsUMKKWfaawlUP3gY',
  MLConfEU: '67a82a37-a1a5-4b0f-9bd1-be837d06c00f',
  GraphQLGalaxy: '02288c23-986f-4354-9a5b-dcff000b2ace',
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
