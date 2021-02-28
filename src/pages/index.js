import React, {useEffect, useState} from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Brochure from "../components/Brochure"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import Gallery from "../components/Gallery"
import Payments from "../components/Payments"
import Service from "../components/Service"
import Videos from "../components/Videos"
import WhyUs from "../components/WhyUs"
import { BASE_URL } from "../data/env"
import '../styles/main.scss'

// markup
const IndexPage = () => {
  const [data, setData] = useState("")
  const [seachString, setSearchString] = useState(window.location.search)

  useEffect(() => {
    let companyName = seachString ? seachString : "null"
    async function fetchData() {
        // const response = await fetch("http://python.alphas9.com/get/company/3")
        const response = await fetch(`${BASE_URL}/get/company_name/${companyName.slice(1)}`)
        const payload = await response.json()
        setData(payload)
        console.log(payload)
    }
    fetchData()
  }, [seachString])

  return (
    <main>
      <title>Home Page</title>
      <Navbar list={data} />
      <Banner data={data?.Home} social={data?.Socialmedia} />
      {data?.About ? <About data={data?.About} /> : null }
      <WhyUs data={data?.Whyus} />
      <Brochure />
      <Service data={data?.Services} />
      <Features data={data?.Features} />
      {/* <Gallery data={data?.Gallery} /> */}
      <Videos data={data?.Video} />
      <Payments data={data?.Payment} />
      <Contact data={data?.Contact} />
      <Footer social={data?.Socialmedia} />
    </main>
  )
}

export default IndexPage
