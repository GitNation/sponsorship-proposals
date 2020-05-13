export default {
  name: "feature",
  title: "Feature",
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
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
      subtitle: 'title'
    }
  }
};
