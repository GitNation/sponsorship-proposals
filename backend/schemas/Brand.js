export default {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fieldsets: [
    {
      name: 'intro',
      title: 'Intro Block',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'motivation',
      title: 'Motivation Block',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'stats',
      title: 'Stats Block',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'tiles',
      title: 'Tiles Block',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'packages',
      title: 'Packages',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'oneStopShop',
      title: 'One stop shop',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'followUs',
      title: 'Follow Us',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'partners',
      title: 'Partners Block',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'decorations',
      title: 'Decorations (video, slider)',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'info',
      title: 'General Information',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'banner',
      title: 'Banner',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'main',
      title: 'Main',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'about',
      title: 'About',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // main
    {
      name: 'pageTitle',
      title: 'Page title',
      type: 'string',
      fieldset: 'main',
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'string',
      fieldset: 'main',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      fieldset: 'main',
    },
    {
      name: 'themeD',
      title: 'Theme color',
      type: 'color',
      fieldset: 'main',
    },
    {
      name: 'theme',
      title: 'Additional theme color',
      type: 'color',
      fieldset: 'main',
    },
    {
      name: 'invertOverlayText',
      title: 'Invert text color overlaying brand colors',
      type: 'boolean',
      fieldset: 'main',
    },
    {
      name: 'introOverlay',
      title: 'Intro section overlay color fallback',
      type: 'color',
      fieldset: 'main',
    },
    {
      name: 'introOverlayText',
      title: 'Intro section text color',
      type: 'color',
      fieldset: 'main',
    },
    {
      name: 'gradient1',
      title: 'Gradient 1',
      type: 'color',
      fieldset: 'main',
      hidden: true,
    },
    {
      name: 'gradient2',
      title: 'Gradient 2',
      type: 'color',
      fieldset: 'main',
      hidden: true,
    },
    {
      title: 'OG Image',
      name: 'ogImage',
      type: 'image',
      fieldset: 'main',
    },
    {
      title: 'Custom contact URL (instead of mailto)',
      name: 'contactUrl',
      type: 'url',
      fieldset: 'main',
    },
    // info
    {
      title: 'Twitter',
      name: 'twitterUrl',
      type: 'url',
      description: 'url',
      fieldset: 'info',
    },
    {
      title: 'Facebook',
      name: 'facebookUrl',
      type: 'url',
      description: 'url',
      fieldset: 'info',
    },
    {
      title: 'Youtube',
      name: 'youtubeUrl',
      type: 'url',
      description: 'url',
      fieldset: 'info',
    },
    {
      title: 'Medium',
      name: 'mediumUrl',
      type: 'url',
      description: 'url',
      fieldset: 'info',
    },
    {
      title: 'Slack',
      name: 'slackUrl',
      type: 'url',
      description: 'url',
      fieldset: 'info',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      fieldset: 'info',
    },
    {
      name: 'mainUrl',
      title: 'Main site',
      type: 'url',
      fieldset: 'info',
    },
    {
      name: 'sponsorsUrl',
      title: 'Sponsorship url',
      type: 'url',
      fieldset: 'info',
    },
    {
      name: 'gaugesTrackingId',
      title: 'Gauges Tracking ID',
      type: 'string',
      fieldset: 'info',
    },
    {
      name: 'hotjarTrackingId',
      title: 'Hotjar Tracking ID',
      type: 'string',
      fieldset: 'info',
    },
    {
      name: 'googleTrackingId',
      title: 'Google Analytics Tracking ID',
      type: 'string',
      fieldset: 'info',
    },
    // intro
    {
      title: 'Title',
      name: 'introTitle',
      type: 'string',
      fieldset: 'intro',
    },
    {
      title: 'Sub title',
      name: 'introSubtitle',
      type: 'string',
      fieldset: 'intro',
    },
    {
      name: 'introSponsorship',
      title: 'Sponsorship',
      type: 'string',
      fieldset: 'intro',
    },
    {
      name: 'introDate',
      title: 'Date',
      type: 'string',
      fieldset: 'intro',
    },
    {
      name: 'introLocation',
      title: 'Location',
      type: 'string',
      fieldset: 'intro',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      fieldset: 'intro',
    },

    {
      title: 'Header Background Image',
      name: 'introBackground',
      type: 'image',
      fieldset: 'intro',
    },
    {
      title: 'Inverted Header Background Image for overlay',
      name: 'introBackgroundInverted',
      type: 'image',
      fieldset: 'intro',
    },

    // motivation
    {
      title: 'Title',
      name: 'motivationTitle',
      type: 'string',
      fieldset: 'motivation',
    },
    {
      title: 'Sub Title',
      name: 'motivationSubTitle',
      type: 'string',
      fieldset: 'motivation',
    },
    {
      title: 'Description',
      name: 'motivationDescription',
      type: 'text',
      fieldset: 'motivation',
    },
    {
      title: 'List',
      name: 'motivationList',
      type: 'array',
      fieldset: 'motivation',
      of: [{ type: 'string' }],
    },
    {
      title: 'Key Features',
      description: 'If key features are set, the features section is moved under stats block',
      name: 'keyFeatures',
      fieldset: 'motivation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'keyFeature' }],
        },
      ],
    },
    {
      title: 'Secondary features',
      name: 'features',
      fieldset: 'motivation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'feature' }],
        },
      ],
    },
    // stats
    {
      title: 'Sub Title',
      name: 'statsSubTitle',
      type: 'string',
      fieldset: 'stats',
    },
    {
      title: 'Description',
      name: 'statsDescription',
      type: 'text',
      fieldset: 'stats',
    },
    {
      title: 'Stats Graphs',
      name: 'stats',
      fieldset: 'stats',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'graph' }],
        },
      ],
    },
    // tiles
    {
      title: 'Hide Tiles block',
      name: 'hideTilesBlock',
      type: 'boolean',
      fieldset: 'tiles',
    },

    {
      title: 'Animation Delay',
      name: 'animDelay',
      type: 'number',
      fieldset: 'tiles',
    },

    {
      title: 'Section Title ',
      name: 'tilesHeadTitle',
      type: 'string',
      fieldset: 'tiles',
    },
    {
      title: 'Title',
      name: 'tilesTitle',
      type: 'string',
      fieldset: 'tiles',
    },

    {
      title: 'Stat Tiles',
      name: 'tales',
      fieldset: 'tiles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'statTile' }],
        },
      ],
    },
    {
      title: 'Title second',
      name: 'tilesTitle2',
      type: 'string',
      fieldset: 'tiles',
    },

    {
      title: 'Stat Tiles second',
      name: 'tales2',
      fieldset: 'tiles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'statTile' }],
        },
      ],
    },
    {
      title: 'Title third',
      name: 'tilesTitle3',
      type: 'string',
      fieldset: 'tiles',
    },

    {
      title: 'Stat Tiles third',
      name: 'tales3',
      fieldset: 'tiles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'statTile' }],
        },
      ],
    },
    // packages
    {
      title: 'Title',
      name: 'packagesTitle',
      type: 'string',
      fieldset: 'packages',
    },
    {
      title: 'Packages',
      name: 'packages',
      fieldset: 'packages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'package' }],
        },
      ],
    },
    // One stop shop
    {
      title: 'Hide block',
      name: 'isOneStopShopShow',
      type: 'boolean',
      fieldset: 'oneStopShop',
    },
    {
      title: 'Title',
      name: 'shopTitle',
      type: 'string',
      fieldset: 'oneStopShop',
    },
    {
      title: 'Sub Title',
      name: 'shopSubtitle',
      type: 'string',
      fieldset: 'oneStopShop',
    },
    {
      title: 'Description',
      name: 'shopDescription',
      type: 'string',
      fieldset: 'oneStopShop',
    },
    {
      title: 'Button text',
      name: 'shopButtonText',
      type: 'string',
      fieldset: 'oneStopShop',
    },
    {
      title: 'Button url',
      name: 'shopButtonUrl',
      type: 'string',
      fieldset: 'oneStopShop',
    },
    {
      title: 'Conferences',
      name: 'conferences',
      fieldset: 'oneStopShop',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'conferences' }],
        },
      ],
    },
    // Banner
    {
      title: 'Hide Banner block',
      name: 'isBannerShow',
      type: 'boolean',
      fieldset: 'banner',
    },
    {
      name: 'bannerConf',
      title: 'Conferences',
      type: 'string',
      options: {
        list: [
          { title: 'С3Fest', value: 'c3' },
          { title: 'Productivity', value: 'pc' },
        ],
      },
      fieldset: 'banner',
    },
    {
      title: 'Title',
      name: 'bannerTitle',
      type: 'string',
      fieldset: 'banner',
    },
    {
      title: 'Description',
      name: 'bannerDescription',
      type: 'string',
      fieldset: 'banner',
    },
    {
      title: 'date',
      name: 'bannerDate',
      type: 'string',
      fieldset: 'banner',
    },
    {
      title: 'Url',
      name: 'bannerUrl',
      type: 'url',
      fieldset: 'banner',
    },
    {
      title: 'Tags',
      name: 'bannerTags',
      type: 'array',
      fieldset: 'banner',
      of: [{ type: 'string' }],
    },
    {
      title: 'Logo',
      name: 'bannerLogo',
      type: 'image',
      fieldset: 'banner',
    },
    {
      title: 'Background image',
      name: 'bannerBg',
      type: 'image',
      fieldset: 'banner',
    },
    // Follow US
    {
      name: 'followUsImg',
      title: 'Image',
      type: 'image',
      fieldset: 'followUs',
    },
    {
      name: 'followUsTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'followUs',
    },
    {
      name: 'followUsDescription',
      title: 'Description',
      type: 'string',
      fieldset: 'followUs',
    },

    // partners
    {
      name: 'partnersTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'partners',
    },

    {
      title: 'Partner testimonials',
      name: 'partnerSlides',
      fieldset: 'partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'partnerSlide' }],
        },
      ],
    },
    {
      name: 'sponsorsTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'partners',
    },
    {
      title: 'Sponsors',
      name: 'sponsors',
      fieldset: 'partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'sponsor' }],
        },
      ],
    },
    {
      name: 'partnersPromoTitle',
      title: 'Promo Title',
      type: 'string',
      fieldset: 'partners',
    },
    {
      name: 'partnersPromoBtnText',
      title: 'Button text',
      type: 'string',
      fieldset: 'partners',
    },
    // About
    {
      title: 'Hide About block',
      name: 'isAboutShow',
      type: 'boolean',
      fieldset: 'about',
    },
    {
      title: 'Title',
      name: 'aboutTitle',
      type: 'string',
      fieldset: 'about',
    },
    {
      title: 'Sub Title',
      name: 'aboutSubTitle',
      type: 'string',
      fieldset: 'about',
    },
    {
      title: 'Description',
      name: 'aboutDescription',
      type: 'text',
      fieldset: 'about',
    },
    {
      title: 'Text Right Markdown',
      name: 'aboutTextRight',
      type: 'text',
      fieldset: 'about',
    },
    {
      title: 'Description 2',
      name: 'aboutDescription2',
      type: 'text',
      fieldset: 'about',
    },
    {
      title: 'Text Right 2 Markdown',
      name: 'aboutTextRight2',
      type: 'text',
      fieldset: 'about',
    },
    // decorations
    {
      title: 'Youtube Video',
      name: 'youtube',
      type: 'url',
      fieldset: 'decorations',
    },
    {
      title: 'Slides',
      name: 'packageSlides',
      fieldset: 'decorations',
      type: 'array',
      of: [
        {
          type: 'packageSlide',
        },
      ],
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage'
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`
  //     })
  //   }
  // }
};
