import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Bestsellers from '../components/Bestsellers'
import AwardWinners from '../components/AwardWinners'
import Recommended from '../components/Recommended'
import TopRated from '../components/TopRated'
import Testimonial from '../components/Testimonial'



const LandingPage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Bestsellers/>
      <AwardWinners/>  
      <TopRated/>
      <Recommended/>
     <Testimonial/>
    </div>
  )
}

export default LandingPage
