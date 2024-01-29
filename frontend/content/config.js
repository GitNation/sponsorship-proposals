if (!process.env.SANITY_ENDPOINT || !process.env.SANITY_TOKEN) {
  throw new Error(`Can't find environment variables: 'SANITY_ENDPOINT' and 'SANITY_TOKEN'.
  Set them in .env file for local development or pass to env when running on CI.
  `);
}

const brandIDs = {
  C3Festival: "bb439caf-801b-4825-9355-0bc1cf4e16a3",
  reactSummit: "8224681e-d99e-45f5-8dfe-14a916a952e9",
  rsre: "be8fcf13-56e5-40d2-b1f7-337187278ca5",
  JSNation: "nt8f6wsK8Ivu113FajImcZ",
  JSNationUs: "955f2d01-1412-4ccf-a01c-d1435d6b607f",
  JSNationLive: "O9I27fZboumean9j8TzJit",
  NodeDayUK: "cmVu3wsUMKKWfaawlUP3gY",
  MLConfEU: "67a82a37-a1a5-4b0f-9bd1-be837d06c00f",
  GraphQLGalaxy: "02288c23-986f-4354-9a5b-dcff000b2ace",
  TestJSSummit: "36a585d8-5dea-43ca-8226-92723eaa5b21",
  NodeCongress: "3c2be5b8-dade-49c0-a681-752cf81ccd6e",
  DevOpsJS: "b7b358b0-a3d8-4e8c-a025-810066ecc724",
  reactAdvanced: "2625576c-ac31-428c-b28f-f0cdd78b4f69",
  vueLondon: "f7d8b8d7-4a80-4e85-a65f-28c7175275e4",
  webgamedevsummit: "4bbbc0ad-a36b-4ef0-97e9-ad39c95d1d6f",
  tscongress: "abe86720-7619-4cae-bde1-408a8463535d",
  ReactDayBerlin: "4168329b-bbee-41d8-93fc-62ba0edbd7de",
  remixconfeu: "f366a626-58e4-4dcc-a093-723e93c30a69",
  reactsummitus: "e8a68ded-a81a-4e99-872e-8c9035a5af29",
  techleadconf: "b1e96afc-5757-434e-a1ff-fd76f663d945",
};

const credentials = {
  endpoint: process.env.SANITY_ENDPOINT,
  token: process.env.SANITY_TOKEN,
};

module.exports = {
  brandIDs,
  credentials,
  isDebug: true,
};
