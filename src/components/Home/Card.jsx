 import React, {useState, useEffect} from "react";
/* import "//Flat.json";  */
import '../../styles/card.css' 

function Card() {
    const [Flat, setFlat] = useState([]);
    const getFlat = () => {
        fetch('Flat.json')
                    
            .then(res => {
            return res.json();
            })
            .then(Flat => {
            setFlat(Flat)
            })
            
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getFlat()
    }, []);
    return(
        <section className="contain">
            <div className="Cards">
            <div key={Flat.id} className="Card">
           
                
        {Flat.map((Flat) => (
            <a href={`Flat${Flat.id}`} key={Flat.id}>
                <div className="Box">
                    <div className="Box_Title">
                        <h2 className="Title">{Flat.title}</h2>
                        </div>
                    <img className="Cover" src={Flat.cover} alt="Logement"></img>
                    </div>
            </a>
            
        ))}
            </div>
            </div>
</section>
    )
};

export default Card



  



