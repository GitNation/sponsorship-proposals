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
				name
				value
				description
				isLarge
				isBackgroundColor
				isImgCenter
			}
			tales2 {
				image {
					asset {
						url
					}
				}
				title
				name
				value
				description
				isLarge
				isBackgroundColor
				isImgCenter
			}
			tales3 {
				image {
					asset {
						url
					}
				}
				title
				name
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
				name,
				value,
				description,
				isBackgroundColor,
				isLarge,
				isImgCenter,
			},
			ind
		) => ({
			title,
			name,
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
	const tales2 =
		data.tales2 &&
		data.tales2.map(
			(
				{
					image,
					title,
					name,
					value,
					description,
					isBackgroundColor,
					isLarge,
					isImgCenter,
				},
				ind
			) => ({
				title,
				name,
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
	const tales3 =
		data.tales3 &&
		data.tales3.map(
			(
				{
					image,
					title,
					name,
					value,
					description,
					isBackgroundColor,
					isLarge,
					isImgCenter,
				},
				ind
			) => ({
				title,
				name,
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
		tileStats2: tales2 ? tales2 : null,
		tileStats3: tales3 ? tales3 : null,
		animDelay,
		hideTilesBlock,
	};
};

module.exports = {
	fetchData,
};
