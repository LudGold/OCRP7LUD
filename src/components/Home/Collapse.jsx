import React, { useState, } from "react";
import '../../styles/collapse.css' 

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className="Collapse">
            <div className="collapse_up">
            <div className="collapse_encart_opened">
            <p className="collapse-title">
                {props.title}
            </p>
            
            <button
                className="dropdown_up"
                type="button"
                onClick={() => setIsOpen(false)}
            >
                          
                <img src="arrow_up.png" alt="" />
                    </button>
                    </div>
                <p className="collapse-description">
                {props.description}
            </p>
            </div>
            </div>
    ):(
  
   
            <div className="collapse_down">
                <div className="collapse_encart_closed">
                <p className="collapse-title">
                {props.title}
            </p>
        <button
            className="dropdown_down"
            type="button"
                    onClick={() => setIsOpen(true)}
                    >
                   {/*  <span>{title}</span> */}
        <img src="arrow_down.png" alt="" />
        
        </button>
                </div>
                </div>
           
            
)}
    