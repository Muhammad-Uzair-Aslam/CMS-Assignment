const blogs = {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
      
      {
        name: 'description1',
        title: 'Description1',
        type: 'string',
      },{
        name: 'description2',
        title: 'Description2',
        type: 'string',
      },{
        name: 'description3',
        title: 'Description3',
        type: 'string',
      },{
        name: 'description4',
        title: 'Description4',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows you to set a hotspot on the image
        },
        
      },
    ],
    
  };

  export default  blogs