import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client'
var fetchservice=async()=>{
  const service=await client.fetch('*[_type=="services"]',{},{cache:"no-cache",})
  return service
}
export default async function ImgDesc() {
  const service=await fetchservice()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {service.map((service)=>{
       return<div key={service._id} className="campus-col ">
       <Image width={300} height={100} src={urlForImage(service.image).url()} alt={service.desc}/>
    
       <div className="layer">
           <h3>{service.desc}</h3>
           
       </div>
   </div>
    })
            
    }
    </div>
  )
}
