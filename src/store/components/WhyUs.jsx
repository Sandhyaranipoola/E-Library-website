import React from 'react'
import image1 from '/images/aboutpage/img1.png'
import { useNavigate } from 'react-router-dom'
const WhyUs = () => {
  const navigate = useNavigate();

  const handlePurchaseClick = () => {
    navigate('/books');
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <h1 className="text-5xl font-medium title-font text-center text-gray-700 mb-9">WHY E-LIBRARY?</h1>
  <img className="lg:w-4/8 md:w-3/6 w-5/6 mb-10 mt-7 object-cover object-center rounded" alt="hero" src={image1}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">To Simplify and To Make Easy Anywhere, Anytime Possibile</h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore in laborum consequuntur, harum ut laboriosam soluta eveniet accusantium velit, sit at quisquam, porro cumque incidunt. Consequuntur facere voluptatem excepturi?</p>
      <div className="flex justify-center">
        <button onClick={handlePurchaseClick} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Purchase items</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default WhyUs
