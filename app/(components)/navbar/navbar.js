import Link from "next/link"
import { client } from "@/sanity/lib/client"
const fetchNavbar=async()=>{
    const navigation=await client.fetch('*[_type=="navigation"]',{},{cache:"no-cache",})
    
    return navigation
}
export default async function Navbar() {
 const navigation=await fetchNavbar()
  return (
    <nav>
            <Link href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    {navigation.map((nav)=>{
                        // console.log(nav.links[0].url)
                         return<li><Link href={nav.links[0].url}>{nav.title}</Link></li>
                    })
                    
                    }
                </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
            
        </nav>
  )
}
