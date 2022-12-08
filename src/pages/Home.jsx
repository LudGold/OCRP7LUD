import React from 'react';
import "../styles/header.css"
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";
import Header from "../components/home/Header";


export default function Home() {
  return (
  
    <div className="Home">
      <Header />
      <Banner/>
      {/* <Card /> */}
      <Footer />
      </div>
   
  )
}
  
 