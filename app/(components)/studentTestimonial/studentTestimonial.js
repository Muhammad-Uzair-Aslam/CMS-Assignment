import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
const fetchTestimonial=async()=>{
  const test=await client.fetch('*[_type=="testimonial"]',{},{cache:"no-cache",})
  return test
}
export default async function StudentTestimonial() {
  const test=await fetchTestimonial()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {test.map((test,i) =>{
           return<div class="testimonials-col" key={i}>
           <Image width={50} height={50} src={urlForImage(test.image).url()} alt="oo.."/>
           <div>
               <p>{test.description}</p>
               <h3>{test.title}</h3>
               
           </div>
           </div>
      })}
    
        </div>
  )
}
