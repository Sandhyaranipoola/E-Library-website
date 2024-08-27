import React from 'react'
import { newYorkTimesData } from '../data/newyorktimes'
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';

const Recommended = () => {
  const twothree=newYorkTimesData.slice(1,3)
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  }
  
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div classNameName="container px-5 py-24 mx-auto">
    <div classNameName="flex flex-col text-center w-full mb-20">
    <h1 className="text-4xl font-medium title-font text-center text-orange-700">Recommended: The New York Times Best Books</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      {twothree.map((item)=>{
        return(
      <div key={item.id} className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={item.image}/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{item.title}</h2>
        <p className="leading-relaxed text-base">{item.description}</p>
        <button onClick={() => handleAddToCart(item)} 
          className="mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>        </div>
       )
      })}
    </div>
  </div>
  </div>
  </div>
</section>
    </div>
  )
}

export default Recommended
