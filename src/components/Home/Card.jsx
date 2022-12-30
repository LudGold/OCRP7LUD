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
      <section className="Contain">
        <div className="Cards">
            {Datas.map((flat) => {
              return (
                <div className="Card" key={flat.id} >
                  <a href={"/oneflat/" + flat.id} >
                    <div className="Card_content">
                      <p className="Card_title">{flat.title}</p>
                      </div>
                    <img className="Card_cover" src={flat.cover} alt="Logement"></img>

                  </a>
                </div>)
            })
          }
        </div>
      </section>
          )
}
          
            


export default Card



  



