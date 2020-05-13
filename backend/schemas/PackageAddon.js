export default {
  name: "addon",
  title: "Package Addons",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "moreLink",
      title: "More Link",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'title'
    }
  }
};
