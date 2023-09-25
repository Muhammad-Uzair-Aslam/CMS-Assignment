 //File name: navigation.js
//File location: schemas/documents


const Navigation= {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Navbar Title',
      description: 'The title of the navigation bar.',
    },
    {
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
};

export default Navigation