 import React, {useState, useEffect} from "react";

import '../../styles/card.css' 

function Card() {
    const [flats, setFlats] = useState([]);
    const getFlat = () => {
        fetch('flat.json')
                    
            .then(res => {
            return res.json();
            })
            .then(fetchedFlats => {
            setFlats(fetchedFlats)
            })
            
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getFlat()
    }, []);
    return (
      <section className="contain">
        <div className="Cards">
          {flats.map((flat) => (
            <div className="Card">
              <a href={flat.id} key={flat.id}>
                <div className="Box">
                  <div className="Box_Title">
                    <h2 className="Title">{flat.title}</h2>
                  </div>
                  <img className="Cover" src={flat.cover} alt="Logement"></img>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Card



  



