import React from 'react'
 import "./assets/CSS/style.css";
import NavBar from './Components/NavBar'
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Product from './Components/Product';
import Review from './Components/Review'
import Contact from './Components/Contact'
import Blog from './Components/Blog';
import Footer from './Components/Footer';
export default function App() {
  return (
    <>
<NavBar/>
<Home/>
<About/>
<Menu/>
<Product/>
<Review/>
<Contact/>
<Blog/>
<Footer/>

    </>
  )
}
