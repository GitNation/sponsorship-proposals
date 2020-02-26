if (!process.env.SANITY_ENDPOINT || !process.env.SANITY_TOKEN) {
  throw new Error(`Can't find environment variables: 'SANITY_ENDPOINT' and 'SANITY_TOKEN'.
  Set them in .env file for local development or pass to env when running on CI.
  `);
}

const brandIDs = {
  reactSummit: '8224681e-d99e-45f5-8dfe-14a916a952e9',
  JSNation: 'nt8f6wsK8Ivu113FajImcZ',
  NodeDayUK: 'cmVu3wsUMKKWfaawlUP3gY',
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
