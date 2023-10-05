
// import blogs from './schemas/blogs'

import About from './schemas/about'
import blogs from './schemas/blogs'
import Card from './schemas/card'
import { contact } from './schemas/contact'
import Courses from './schemas/courses'
import Footer from './schemas/footer'
import Header from './schemas/header'
import Navigation from './schemas/navigation'
import postcategories from './schemas/postcategories'
import services from './schemas/services'
import Testimonial from './schemas/testimonial'

export const schema = {
  types: [services,Card,Testimonial,Courses,Navigation,Header,Footer,postcategories,blogs,contact,About],
}
