import { client } from '@/sanity/lib/client'
import Button from '../(components)/button/button'
import Header from '../(components)/header/header'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
const fetchabout=async()=>{
  const about=await client.fetch('*[_type=="about"]',{},{cache:"no-cache"})
  return about
}
export default async function About() {
  const about =await fetchabout()
  return (
    <div>
      <Header title="About Us"/>
      <section className="about-us">
        {
          about.map((items)=>{
return<div className="row">
<div className="about-col">
    <h1>{items.title}</h1>
    <p>{items.description}</p>
    <Button title={items.buttonText} link="#" border="1px solid blue" color="blue"/>
</div>
<div className="about-col">
    <Image width={200} height={300} src={urlForImage(items.image).url()} alt=""/>
</div>
</div>
          })
        }
        
    </section>
    </div>
  )
}
