const queryPages = /* GraphQL */ `
	query ($brandId: ID!) {
		data: Brand(id: $brandId) {
			conferences: conferences {
				title
				date
				url
				img {
					asset {
						url
					}
				}
			}
		}
	}
`;

const fetchData = async (client, vars) => {
	const data = await client
		.request(queryPages, vars)
		.then((res) => res.data.conferences);

	return {
		conferences: data,
	};
};

module.exports = {
	fetchData,
};
