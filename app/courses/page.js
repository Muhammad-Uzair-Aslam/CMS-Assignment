
import Header from '../(components)/header/header'
import ImgCard from '../(components)/imgCard/imgCard'
import TextCard from '../(components)/textCard/textCard'
import Image from "next/image"
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
const fetchingCourses=async()=>{
  const courses=client.fetch('*[_type=="courses"]',{},{cache:"no-cache",})
  return courses
}
export default async function Courses() {
  const courses=await fetchingCourses()
  return (
    <div>
      <Header title="Our Courses"/>
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
        <TextCard />
          
          </div>
          </section>
          <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course)=>{
          return<div className="facilities-col" key={course._id}>
          <Image width={150} height={250} src={urlForImage(course.image).url()} alt=""/>
          <h3 className="text-xl font-bold">{course.title}</h3>
          <p>{course.description}
          </p>
      </div>
      })}
    
</div>
            
          </div>
          </section>
    </div>
  )
}
