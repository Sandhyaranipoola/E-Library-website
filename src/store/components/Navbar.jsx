import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-info">
      <div className="container">
        <div className="row align-items-center py-2 py-md-3">
          
          <div className="col-6 col-md-3 d-flex align-items-center">
            <img 
              src="/images/home/logo.png" 
              alt="E-Library Logo" 
              className="rounded-circle" 
              style={{ width: '40px', height: '40px' }} 
            />
            <span className="ms-2 h5 mb-0 d-none d-md-inline">E-Library</span>
          </div>

          <div className="col-6 d-md-none text-end">
            <button 
              className="btn btn-outline-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbar-menu"
              aria-expanded={isOpen}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center ${isOpen ? 'd-block' : 'd-none d-md-flex'} align-items-center`}>
            <nav className="d-flex flex-column flex-md-row mt-2 mt-md-0">
              <Link to='/' className="nav-link px-2">Home</Link>
              <Link to='/about' className="nav-link px-2">About</Link>
              <Link to='/books' className="nav-link px-2">Books</Link>
              <Link to='/myshelf' className="nav-link px-2">MyShelf</Link>
              <Link to='/contact' className="nav-link px-2">Contact</Link>
            </nav>
          </div>

          <div className="col-12 d-md-none d-flex justify-content-end align-items-center mt-2">
            <div className="d-flex flex-row">
              <Link to='/login' className="btn btn-outline-primary me-2">SignIn</Link>
              <Link to='/register' className="btn btn-primary me-2">SignUp</Link>
              <Link to='/cart' className="text-secondary" style={{ fontSize: '1.8rem'}}><i className="bi bi-cart"></i></Link>
            </div>
          </div>

          {/* User Actions for Laptop and Tablet View */}
          <div className="col-6 col-md-3 d-none d-md-flex justify-content-end">
            <div className="d-flex align-items-center">
              <Link to='/login' className="btn btn-outline-primary me-2">SignIn</Link>
              <Link to='/register' className="btn btn-primary me-2">SignUp</Link>
              <Link to='/cart' className="text-secondary" style={{ fontSize: '1.8rem'}}><i className="bi bi-cart"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
