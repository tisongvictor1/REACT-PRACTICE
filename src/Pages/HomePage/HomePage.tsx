import AboutUs from "../../Components/About Us/AboutUs"
import Home from "../../Components/Home/Home"
import Testimonial from "../../Components/Testimonial/Testimonial"
import WhatYouLearn from "../../Components/What You Will Learn/WhatYouLearn"
import WhyChooseUs from "../../Components/Why Choose Us/WhyChooseUs"
import Footer from "../../Footer/Footer"


const HomePage = () => {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <WhatYouLearn/>
      <WhyChooseUs/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default HomePage
