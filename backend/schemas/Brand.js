export default {
  name: "brand",
  title: "Brand",
  type: "document",
  fieldsets: [
    {
      name: "intro",
      title: "Intro Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "motivation",
      title: "Motivation Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "stats",
      title: "Stats Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "tiles",
      title: "Tiles Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "packages",
      title: "Packages",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "partners",
      title: "Partners Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "decorations",
      title: "Decorations (video, slider)",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "info",
      title: "General Information",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "main",
      title: "Main",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    // main
    {
      name: "pageTitle",
      title: "Page title",
      type: "string",
      fieldset: "main",
    },
    {
      name: "pageDescription",
      title: "Page Description",
      type: "string",
      fieldset: "main",
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
      fieldset: "main",
    },
    {
      name: "themeD",
      title: "Theme color",
      type: "color",
      fieldset: "main",
    },
    {
      name: "theme",
      title: "Additional theme color",
      type: "color",
      fieldset: "main",
    },
    {
      name: "introOverlay",
      title: "Intro section overlay color fallback",
      type: "color",
      fieldset: "main",
    },
    {
      name: "introOverlayText",
      title: "Intro section text color",
      type: "color",
      fieldset: "main",
    },
    {
      name: "gradient1",
      title: "Gradient 1",
      type: "color",
      fieldset: "main",
      hidden: true,
    },
    {
      name: "gradient2",
      title: "Gradient 2",
      type: "color",
      fieldset: "main",
      hidden: true,
    },
    {
      title: "OG Image",
      name: "ogImage",
      type: "image",
      fieldset: "main",
    },
    {
      title: "Custom contact URL (instead of mailto)",
      name: "contactUrl",
      type: "url",
      fieldset: "main",
    },
    // info
    {
      title: "Twitter",
      name: "twitterUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Facebook",
      name: "facebookUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Youtube",
      name: "youtubeUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Medium",
      name: "mediumUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Slack",
      name: "slackUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      fieldset: "info",
    },
    {
      name: "mainUrl",
      title: "Main site",
      type: "url",
      fieldset: "info",
    },
    {
      name: "sponsorsUrl",
      title: "Sponsorship url",
      type: "url",
      fieldset: "info",
    },
    {
      name: "gaugesTrackingId",
      title: "Gauges Tracking ID",
      type: "string",
      fieldset: "info",
    },
    {
      name: "googleTrackingId",
      title: "Google Analytics Tracking ID",
      type: "string",
      fieldset: "info",
    },
    // intro
    {
      title: "Title",
      name: "introTitle",
      type: "string",
      fieldset: "intro",
    },
    {
      title: "Sub title",
      name: "introSubtitle",
      type: "string",
      fieldset: "intro",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      fieldset: "intro",
    },
    {
      title: "Header Background Image",
      name: "introBackground",
      type: "image",
      fieldset: "intro",
    },
    {
      title: "Inverted Header Background Image for overlay",
      name: "introBackgroundInverted",
      type: "image",
      fieldset: "intro",
    },
    // motivation
    {
      title: "Features",
      name: "features",
      fieldset: "motivation",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "feature" }],
        },
      ],
    },
    // stats
    {
      title: "Stats Graphs",
      name: "stats",
      fieldset: "stats",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "graph" }],
        },
      ],
    },
    // tiles
    {
      title: "Animation Delay",
      name: "animDelay",
      type: "number",
      fieldset: "tiles",
    },
    {
      title: "Stat Tiles",
      name: "tales",
      fieldset: "tiles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "statTile" }],
        },
      ],
    },
    // packages
    {
      title: "Packages",
      name: "packages",
      fieldset: "packages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "package" }],
        },
      ],
    },
    // partners
    {
      title: "Partner testimonials",
      name: "partnerSlides",
      fieldset: "partners",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "partnerSlide" }],
        },
      ],
    },
    {
      title: "Sponsors",
      name: "sponsors",
      fieldset: "partners",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
        },
      ],
    },
    // decorations
    {
      title: "Youtube Video",
      name: "youtube",
      type: "url",
      fieldset: "decorations",
    },
    {
      title: "Slides",
      name: "packageSlides",
      fieldset: "decorations",
      type: "array",
      of: [
        {
          type: "packageSlide",
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
