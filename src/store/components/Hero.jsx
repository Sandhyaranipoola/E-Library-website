import React from 'react'
import heroimage from "/images/home/img1.jpg"
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/books');
  };
  return (
   <>
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={heroimage} width={500}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Buy Before it Sold Out<br></br>
      <span className="hidden lg:inline-block text-blue-900">at your hands</span> </h1>

      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum at mollitia laudantium. Hic atque ipsa animi aliquid velit ullam quas, qui porro corrupti, delectus provident, facilis ducimus voluptatem nam!</p>
      <div className="flex justify-center">
        <button onClick={handleExploreClick} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Now</button>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Hero
