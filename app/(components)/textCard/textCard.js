
import { client } from "@/sanity/lib/client"
const fetchServices=async()=>{
  const services=await client.fetch('*[_type=="services"]',{},{cache:"no-cache",})
  
  return services
}
export default async function TextCard(props) {
  const services = await fetchServices()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service,i)=>{
                     return<div key={i} className="course-col"><h3>{service.title}</h3>
                     <p>{service.description}</p></div>
              })}
                
            </div>
  )
}
