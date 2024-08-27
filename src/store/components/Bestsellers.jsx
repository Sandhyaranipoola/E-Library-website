import React from 'react';
import { bestsellerData } from '../data/ourBestSeller';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';
import './Bestsellers.css'; // Import custom CSS for media queries

const Bestsellers = () => {
  const fourimgs = bestsellerData.slice(0, 4);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-green-900">OUR BEST SELLERS</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>
        <div className="row">
          {fourimgs.map((book) => (
            <div key={book.id} className="col-6 col-md-3 mb-4 d-flex align-items-stretch">
              <div className="card h-100" style={{ backgroundColor: 'aliceblue' }}>
                <img
                  src={book.image}
                  className="card-img-top img-responsive"
                  alt={book.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{book.category}</h6>
                  <p className="card-text d-none d-md-block">{book.description}</p>
                  <p className="card-text font-weight-bold mt-auto">
                    ₹{book.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="btn btn-primary w-100 mt-3"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
