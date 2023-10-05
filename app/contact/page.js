import React from 'react'
import Header from '../(components)/header/header'
import InputField from '../(components)/inputField/inputField'
import Button from '../(components)/button/button'
import { client } from '@/sanity/lib/client'
const fetchContact=async()=>{
    let contact=await client.fetch('*[_type=="contact"]',{},{cache:"no-cache"})
    return contact
}
export default async function Contact() {
    const contact=await  fetchContact()
  return (
    <div>
      <Header title="Contact Us"/>
      <section className="loacation">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
            width="600" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy"></iframe>
    </section>
    <section className="contact-us">
        <div className="row">
            <div className="content-col">
                {contact.map((items)=>{
                   return <div>
                    
                    <span>
                        <h5>{items.heading}</h5>
                        <p>{items.description}</p>
                    </span>
                </div>
                })}
            </div>
            <div className="content-col">
                <form>
                  <InputField type="text" placeholder="Enter Name"/>
                  <InputField type="email" placeholder="Enter Email"/>
                  <InputField type="text" placeholder="Enter Subject" />
                    <textarea rows="8" placeholder="Message" required></textarea>
                    <Button title="Send Message" link="#" border="1px solid blue" color="blue"/>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}
