import "../styles/header.css"
import "../styles/card.css"
import Datas from "../datas/flat.json"
/* import Header from "../components/home/Header"; */
/* import useEffect from "react" */
import { useParams, Navigate} from "react-router-dom";
/* import { useState } from "react" */
import Gallery from "../components/Gallery";



export default function OneFlat() {
    const { id } = useParams();
    console.log({ id })
    const selectFlat = Datas.find((flat) => id === flat.id)
    if (!selectFlat) {
        return <Navigate to = "/404"/>
    }
    console.log(selectFlat);
    const { description, title, pictures } = selectFlat;
        
    /* const [flats, setFlats] = useState([]);
  
      const getFlat = () => {
          fetch('flat.json')
              .then(res => {
                  return res.json();
              })
              .then(fetchedFlat => {
                      setFlats(id)
                  const selectFlat = fetchedFlat.find((flat) => id === flat.id)
  
                  if (!selectFlat) {
                      return ("/erreur");
                  }
              })
          
              .catch(err => console.log(err))
      }
      useEffect(() => {
          getFlat()
      }, []); */

    return (
        <div id="flat_select">
           <Gallery pictures= {pictures} />
            <div className="flat_content">
                <div className="flat_box">
                    <div className="flat_information">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {/* iterer sur tags  et collapse*/}
                    </div>

                    <div className="flat_guy">{/* contact et photo */}</div>
                    <div className="stars"></div>
                </div>
            </div>
        </div>
);}

    
  /*   const [flats, setFlats] = useState([]);
    const getFlat = () => {
        fetch('flat.json')
                    
            .then(res => {
                return res.json();
            })
            .then(fetchedFlats => {
                setFlats(fetchedFlats)
                const selectFlat = flat.find((flat) => id === flat.id);
                
            })
            
            .catch(err => console.log(err))
    
        useEffect(() => {
            getFlat()
        }, []);
    } */

       /*  const { description, title } = selectFlat;
     */
      
        /* const [flats, setFlats] = useState([]);
      
          const getFlat = () => {
              fetch('flat.json')
                  .then(res => {
                      return res.json();
                  })
                  .then(fetchedFlat => {
                          setFlats(id)
                      const selectFlat = fetchedFlat.find((flat) => id === flat.id)
      
                      if (!selectFlat) {
                          return ("/erreur");
                      }
                  })
              
                  .catch(err => console.log(err))
          }
          useEffect(() => {
              getFlat()
          }, []); */

        /* return (
            <div id="flat_select">
                {/* components gallery */
         /*        <div className="flat_content">
                    <div className="flat_box">
                        <div className="flat_information">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            {/* iterer sur tags  et collapse*/
                  /*       </div>

                        <div className="flat_guy">{/* contact et photo *//* }</div>
                        <div className="stars"></div>
                    </div>
                </div>
            </div> */ 
 



         
    
    
       
