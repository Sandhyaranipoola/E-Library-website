
// import './App.css'
import Footer from './store/components/Footer'
import Navbar from './store/components/Navbar'
import AboutPage from './store/pages/AboutPage'
import BooksPage from './store/pages/BooksPage'
import ContactPage from './store/pages/ContactPage'
import LandingPage from './store/pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import MyShelfPage from './store/pages/MyShelfPage'
import CartPage from './store/pages/CartPage'
import Register from './store/components/Register'
import Login from './store/components/Login'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/books' element={<BooksPage/>}/>
      <Route path='/myshelf' element={<MyShelfPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
