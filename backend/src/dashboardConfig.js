const apiId = process.env.SANITY_STUDIO_NETLIFY_JSNLIVE_API_ID;
const buildHookId = process.env.SANITY_STUDIO_NETLIFY_JSNLIVE_BUILD_HOOK_ID;

export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'Deploy preview',
        sites: [
          {
            title: 'JSNation Live',
            apiId,
            buildHookId,
            name: 'develop--gitnation-sponsorship-proposals',
          }
        ]
      }
    }
  ]
}
