import React, {useEffect, useState} from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Brochure from "../components/Brochure"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Footer from "../components/Footer"
// import Gallery from "../components/Gallery"
import Payments from "../components/Payments"
import Service from "../components/Service"
import Videos from "../components/Videos"
import WhyUs from "../components/WhyUs"
import '../styles/main.scss'

// markup
const IndexPage = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    async function fetchData() {
        const response = await fetch("http://python.alphas9.com/get/company/3")
        const payload = await response.json()
        setData(payload)
        console.log(payload)
    }
    fetchData()
  }, [])

  return (
    <main>
      <title>Home Page</title>
      <Banner data={data?.Home} />
      <About data={data?.About} />
      <WhyUs data={data?.Whyus} />
      <Brochure />
      <Service data={data?.Services} />
      <Features data={data?.Features} />
      {/* <Gallery data={data?.Gallery} /> */}
      <Videos data={data?.Video} />
      <Payments data={data?.Payment} />
      <Contact data={data?.Contact} />
      <Footer />
    </main>
  )
}

export default IndexPage
