const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      keyFeatures {
        keyFigure
        keyFigureLabel
        description
      }
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => res.data.keyFeatures);

  if (!data) {
    return {
      keyFeatures: null
    };
  }

  const keyFeatures = data.map(async(keyFeature, ind) => ({
    ...keyFeature,
    animation: 'fade-up',
    animDelay: 200 + ind * 100,
  }));

  return {
    keyFeatures,
  };
};

module.exports = {
  fetchData,
};
