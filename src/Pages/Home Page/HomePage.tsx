import AboutUs from "../../Components/About Us/AboutUs"
import Home from "../../Components/Home/Home"
import LearnForex from "../../Components/Learn Forex/LearnForex"
import Testimonial from "../../Components/Testimonial/Testimonial"
import WhatYouLearn from "../../Components/What You Will Learn/WhatYouLearn"
import WhyChooseUs from "../../Components/Why Choose Us/WhyChooseUs"
import Footer from "../../Footer/Footer"


const HomePage = () => {
  return (
    <div>
        {/* <Login/> */}
      <Home/>
      <AboutUs/>
      {/* <LearnForex/> */}
      <WhatYouLearn/>
      <WhyChooseUs/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default HomePage
