const { markdownToHtml } = require("./markdown");

const queryPages = /* GraphQL */ `
	query ($brandId: ID!) {
		data: Brand(id: $brandId) {
			name
			pageTitle
			pageDescription
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
			introSubtitle
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
			motivationDescription
			motivationList
			tilesTitle
			tilesTitle2
			tilesTitle3
			packagesTitle
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
			partnersTitle
			sponsorsTitle
			partnersPromoTitle
			partnersPromoBtnText
			isAboutShow
			aboutTitle
			aboutSubTitle
			aboutDescription
			aboutTextRight
			aboutDescription2
			aboutTextRight2
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
