import React, { useState, } from "react";
import '../../styles/collapse.css' 

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className="collapse">
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
                          
                <img src="/arrow_up.png" alt="flèche du haut" />
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
                        <img src="/arrow_down.png" alt="flèche du bas" />
        
        </button>
                </div>
                </div>
           
            
)}
    