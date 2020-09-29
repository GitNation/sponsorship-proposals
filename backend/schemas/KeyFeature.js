export default {
  name: "keyFeature",
  title: "Key features",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "keyFigure",
      title: "Key figure value",
      type: "string",
    },
    {
      name: "keyFigureLabel",
      title: "Key figure label",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'keyFigure'
    }
  }
};
