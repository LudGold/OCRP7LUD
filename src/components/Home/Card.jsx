 /* import React, {useState, useEffect} from "react"; */
 import Datas from "../../datas/flat.json"
import '../../styles/card.css' 

function Card() {
    /* const [flats, setFlats] = useState([]); */
  console.log(Datas)
    /* const getFlat = () => {
      fetch({ Datas })
                    
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
    }, []); */
      return (
      <section className="contain">
        <div className="Cards">
            {Datas.map((flat) => {
              return (
                <div className="Card" key={flat.id} >
                  <a href={"/oneflat/" + flat.id} >
                    <h2 className="Title">{flat.title}</h2>
                    <img className="Cover" src={flat.cover} alt="Logement"></img>

                  </a>
                </div>)
            })
          }
        </div>
      </section>
          )
}
          
            


export default Card



  



