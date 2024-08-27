import React from 'react'
import { fantasyData } from '../data/fantasy'
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';
const Fantasy = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-medium title-font mb-4 text-green-900">Fantasy</h1>
        <div className="flex flex-wrap -m-4">
          {fantasyData.map((item) => (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center h-full block" src={item.image}/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.author}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                <p className="mt-1">{item.price}</p>
                <button 
                  onClick={() => handleAddToCart(item)} 
                  className="mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default Fantasy
