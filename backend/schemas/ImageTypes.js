export const Sponsor = {
  type: 'document',
  name: 'sponsor',
  title: 'Sponsors',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'width',
      type: 'number',
      title: 'Width',
      options: {
        isHighlighted: true,
      },
    },
  ],
};

export const PartnerSlide = {
  type: 'document',
  name: 'partnerSlide',
  title: 'Partner testimonials',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Person name',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'job',
      type: 'string',
      title: 'Position',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'logo',
      type: 'image',
      title: 'logo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'name',
    },
  },
};

export const PackageSlide = {
  type: 'object',
  name: 'packageSlide',
  title: 'Package Slide',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'image',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
  },
};
