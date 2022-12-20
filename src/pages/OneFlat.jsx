import "../styles/header.css"
import "../styles/card.css"
import Header from "../components/home/Header";
import useEffect from "react"
import { Link } from "react-router-dom"; 
import { useParams, useNavigate } from "react-router-dom"; 
import Card from "../components/home/Card"; 
/* import { useState } from "react"; */

export default function OneFlat() {

    const ID  = useParams();
    
    const findFlat = useNavigate();
    useEffect(() => {
        
        const selectFlat = Card.find(() => Card.id === ID.id);
       
        if (!selectFlat) {
            return findFlat ("/error");
        }
    
        return (

            <div>
                <Header />
               
                <h1 className="TitreLogement">{selectFlat.title}</h1>
                <Link to="/OneFlat/:id" className="oneFlat"></Link>
                
               
                
                

              
            </div>
        )
    })
}
    
    
        /*  <div id="house">
            <div className="house">
                {Card.filter((flat) => flat.id === ID.id).map(
                    (flats, index) => (
                        <div key={flats.id - index} className="house__boxes">
                            <div
                                title={flats.title}
                                description={flats.description} />
                            
                        </div>))}
            </div>
        </div>)
};
         */
