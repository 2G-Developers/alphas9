import * as React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Brochure from "../components/Brochure"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Payments from "../components/Payments"
import Service from "../components/Service"
import Videos from "../components/Videos"
import WhyUs from "../components/WhyUs"
import '../styles/main.scss'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Banner />
      <About />
      <WhyUs />
      <Brochure />
      <Service />
      <Features />
      <Gallery />
      <Videos />
      <Payments />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
