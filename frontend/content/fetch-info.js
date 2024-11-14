const { markdownToHtml } = require("./markdown");

const queryPages = /* GraphQL */ `
	query ($brandId: ID!) {
		data: Brand(id: $brandId) {
			name
			pageTitle
			pageDescription
			brandSelect
			sponsorsUrl
			twitterUrl
			facebookUrl
			youtubeUrl
			mediumUrl
			slackUrl
			gaugesTrackingId
			hotjarTrackingId
			googleTrackingId
			email
			contactUrl
			introTitle
			introSponsorship
			introDate
			introLocation
			logo {
				asset {
					url
				}
			}
			ogImage {
				asset {
					url
				}
			}
			introBackground {
				asset {
					url
				}
			}
			introBackgroundInverted {
				asset {
					url
				}
			}
			motivationTitle
			motivationSubTitle
			tilesHeadTitle
			tilesTitle
			tilesTitle2
			tilesTitle3
			packagesTitle
			isOneStopShopShow
			shopTitle
			shopSubtitle
			shopDescription
			shopButtonText
			shopButtonUrl
			statsSubTitle
			statsDescription
			followUsImg {
				asset {
					url
				}
			}
			followUsTitle
			followUsDescription
			isBannerShow
			bannerTitle
			bannerDescription
			bannerUrl
			bannerDate
			bannerTags
			bannerLogo {
				asset {
					url
				}
			}
			bannerBg {
				asset {
					url
				}
			}
			bannerConf
			partnersTitle
			sponsorsTitle
			partnersPromoTitle
			partnersPromoBtnText
			isAboutShow
			aboutTitle
			aboutSubTitle
			aboutTextFirst
			aboutTextSecond
		}
	}
`;

const fetchData = async (client, vars) => {
	const data = await client.request(queryPages, vars).then((res) => res.data);

	const info = {
		...data,
		aboutTextRight: await markdownToHtml(data.aboutTextRight),
		aboutTextRight2: await markdownToHtml(data.aboutTextRight2),
	};

	return {
		info: info,
	};
};

module.exports = {
	fetchData,
};
