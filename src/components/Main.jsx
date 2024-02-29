import React from 'react'
import Home from './Home'
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
          <Home name="Generative Ai"/>
          <ServiceCards />
          <Footer />
    </div>
  )
}

export default Main