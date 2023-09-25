const Footer = {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name:'description',
        title:'Description',
        type:'string'
      },
      {
        name:'text',
        title:'Text',
        type:'string',
      },
      {
        name:'text2',
        title:'Text2',
        type:'string',
      },{
        name: 'links',
        type: 'array',
        title: 'Navigation Links',
        description: 'Add links to your navigation bar.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'label',
                type: 'string',
                title: 'Link Label',
                description: 'The text displayed for the link.',
              },
              {
                name: 'url',
                type: 'url',
                title: 'Link URL',
                description: 'The URL the link points to.',
                validation: (Rule) => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'], // Add any other schemes you need
                }),
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
        description:'description'
      },
    },
  }
  export default Footer
