export default {
  name: 'conferences',
  title: 'Conferences',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img',
      date: 'date',
    },
  },
};
