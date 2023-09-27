import Image from 'next/image'
import Header from '../(components)/header/header'
import Paragraph from '../(components)/paragraph/paragraph'
import InputField from '../(components)/inputField/inputField'
import Button from '../(components)/button/button'

import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client'
const fetchBlogs=async()=>{
    const Blogs=await client.fetch('*[_type=="blogs"]',{},{cache:"no-cache"},);
    return Blogs
}
const fetchpostCategories=async()=>{
    const post=await client.fetch('*[_type=="postCategories"]',{},{cache:"no-cache"},);
    console.log(post)
    return post
}
export default async function Blog() {
    const Blogs=await fetchBlogs()
    const post=await fetchpostCategories()
  return (
    <div>
      <Header title="Our Posts"/>
      <section className="blog-content">
        <div className="row">
            <div className="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                {Blogs.map((blog)=>{
                    return<div>
                        <Image width={200} height={300} src={urlForImage(blog.image).url()} alt="image"/>
                        <p>{blog.description1}</p><br/>
                        <p>{blog.description1}</p><br/>
                        <p>{blog.description1}</p><br/>
                        <p>{blog.description1}</p><br/>
                    </div>
                }) 
                
                
                
                }
                <div className="comment-box">
                    <h3>Leave a Comment</h3>
                    <form className="comment-form">
                        <InputField placeholder="Enter Name" type="text"/>
                        <InputField placeholder="Enter Email" type="email"/>
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <Button title="Post Comment" link="#" border="1px solid blue" color="blue"/>
                    </form>
                </div>
            </div>

            <div className="blog-right">
                <h3>Post Categories</h3>
                {post.map((posts)=>{return<div>
                    <span>{posts.description}</span>
                    <span>{posts.number}</span>
                </div>
                })
                }
                
            </div>
        </div>
    </section>
    </div>
  )
}
