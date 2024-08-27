import React from 'react'
import image2 from '/images/aboutpage/img2.webp'
import image5 from '/images/aboutpage/img5.jpg'
import image6 from '/images/aboutpage/img6.jpg'
import image4 from '/images/aboutpage/img4.jpg'
import image7 from '/images/aboutpage/img7.jpg'
const OurVision = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-5xl text-2xl font-medium title-font text-green-900 lg:w-1/3 lg:mb-0 mb-4">OUR VISION</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sapiente dignissimos modi quo neque, vitae aliquam qui eos consequuntur, deleniti, tenetur doloribus dolorum in saepe esse delectus molestias numquam? Excepturi.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image2}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image6}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={image5}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={image4}/>
        </div>
        <div className="md:p-2 p-1">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image7}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default OurVision
