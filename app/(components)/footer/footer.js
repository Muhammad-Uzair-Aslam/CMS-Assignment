import Link from "next/link"
import { client } from "@/sanity/lib/client";
const fetchFooter=async()=>{
  const footerData=await client.fetch('*[_type=="footer"]',{},{cache:"no-cache",})
  console.log(footerData)
  return footerData;
}
export default async function Footer() {
  const footerData=await fetchFooter()
  return (
    <section className="footer">
        <hr/>
        {footerData.map((footerData)=>{
          console.log(footerData.links)
          return<>
          <h4>{footerData.title}</h4>
        <p>{footerData.description}</p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        
        <p>{footerData.text}<i className="fas fa-heart"></i>  <a href={footerData.links[0].url}>{footerData.links[0].label}</a></p>
        <p>{footerData.text2} <Link href="index.html">Xplore Skill</Link>. All Rights Reserved</p>
          </>
        })}
        
    </section>
  )
}
