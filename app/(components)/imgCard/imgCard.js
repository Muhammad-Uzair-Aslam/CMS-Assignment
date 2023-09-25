
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
const fetchCard=async()=>{
  const cards=await client.fetch('*[_type=="cards"]',{},{cache:"no-cache",})
  return cards
}
export default async function ImgCard() {
  const cards=await fetchCard()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card)=>{
          return<div className="facilities-col">
          <Image width={150} height={250} src={urlForImage(card.image).url()} alt=""/>
          <h3 className="text-xl font-bold">{card.title}</h3>
          <p>{card.description}
          </p>
      </div>
      })}
    
</div>
  )
}
