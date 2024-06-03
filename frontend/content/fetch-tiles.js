const queryPages = /* GraphQL */ `
	query ($brandId: ID!) {
		data: Brand(id: $brandId) {
			animDelay
			hideTilesBlock
			tales {
				image {
					asset {
						url
					}
				}
				title
				value
				description
				isLarge
				isBackgroundColor
				isImgCenter
			}
		}
	}
`;

const getUrl = (image) => image && image.asset && image.asset.url;

const fetchData = async (client, vars) => {
	const data = await client.request(queryPages, vars).then((res) => res.data);

	const { animDelay, hideTilesBlock } = data;

	const tales = data.tales.map(
		(
			{
				image,
				title,
				value,
				description,
				isBackgroundColor,
				isLarge,
				isImgCenter,
			},
			ind
		) => ({
			title,
			nums: value,
			description,
			animDelay,
			isLarge,
			isBackgroundColor,
			isImgCenter,
			img: getUrl(image),
			animation: !(ind % 2) ? "fade-up" : "fade-down",
		})
	);
	return {
		tileStats: tales,
		animDelay,
		hideTilesBlock,
	};
};

module.exports = {
	fetchData,
};
