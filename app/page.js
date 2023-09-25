import Image from 'next/image'
import Navbar from './(components)/navbar/navbar'
import TextCard from './(components)/textCard/textCard'
import HeadingAndText from './(components)/headingAndText/headingAndText'
import ImgDesc from './(components)/imgDesc/imgDesc'
import ImgCard from './(components)/imgCard/imgCard'
import StudentTestimonial from './(components)/studentTestimonial/studentTestimonial'
import Link from 'next/link'
import Button from './(components)/button/button'
import { client } from '@/sanity/lib/client'
const fetchData=async()=>{
     const data=await client.fetch('*[_type=="header"]',{},{cache:"no-cache",})
     console.log(data)
     return data;
}

export default async function Home() {
  const data=await fetchData()
  
  return (
    <>
    <section className="header">
      <Navbar/>
    <div className="text_box">
      {data.map((data)=>{
      return<>
           <h2>{data.mainTitle}</h2>
           <p id="headtext">{data.title}</p>
           <p>{data.description}
           </p>
           <Button title={data.buttonText} link="#"/></>
      })}
            
        </div></section>
        <section className="course">
        <HeadingAndText h1="EXPLORE OUR 60+" h2="MAJOR PROGRAMS"/>
        <div className="row">
          <TextCard />
          
          </div>
          </section>
          <section className="campus">
            <HeadingAndText h1="TAKE OUR VIRTUAL TOUR"/>
            <div className="row">
            <ImgDesc/>
            </div>
          </section>
          <section className="facilities">
           <HeadingAndText h1="Our Facilities"/>
           <div className="row">
            <ImgCard />
           </div>
          </section>
          <section className="testimonials">
            <HeadingAndText h1="What Our Students Say"/>
            <div className="row">
              <StudentTestimonial/>
            </div>
          </section>
          <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button title="Contact Us" link="/contact"/>
    </section>
          </>
  )
}
