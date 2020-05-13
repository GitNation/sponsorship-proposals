export default {
  name: "statTile",
  title: "Statistic Tiles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
    {
      name: "description",
      title: "description",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      description: 'description',
      value: 'value'
    },
    prepare(selection) {
      const {title, media, description, value} = selection
      return {
        title,
        media,
        subtitle: `${value ? value : ''} ${description ? description : ''}`
      }
    }
  }
};
