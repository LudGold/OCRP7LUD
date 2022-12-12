import React from "react";
import "../styles/about.css"
import "../styles/header.css"
 /* import Card from "../components/home/Card";  */
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";

/* import styled from 'styled-components' */


export default function About() {
 return (
    <div>
         <Header />
         <div className="Container">
        
        <div className="About">
            <img src="Banner_About_Desk.png" alt="" className= 'about-banner_home' />
    
            </div>
                <div className="About_Mob">
            <img src="Banner_About_Mobile.png" alt="" className='about_banner_mob' />
         </div>
         
         
             
                </div>
             <Footer />  
             </div>        
  
             
     
    
             
  
                  
           
         
          
      

    )
};