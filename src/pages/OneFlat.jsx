import "../styles/header.css";
import "../styles/card.css";
import "../styles/oneFlat.css";
import Datas from "../datas/flat.json";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
/* import useEffect from "react" */
import { useParams, Navigate } from "react-router-dom";
/* import { useState } from "react" */
import Gallery from "../components/Gallery";
import Stars from "../components/stars";
import Collapse from "../components/home/Collapse";

export default function OneFlat() {
  const { id } = useParams();
  console.log({ id });
  const selectFlat = Datas.find((flat) => id === flat.id);
  if (!selectFlat) {
    return <Navigate to="/404" />;
  }
  console.log(selectFlat);
  const { title, pictures, location, equipments, host } = selectFlat;
  const Tags = selectFlat.tags;

  return (
    <div id="flat_select">
      <Header />

      <Gallery pictures={pictures} />
      <div className="flat_content">
        <div className="flat_box">
          <div className="flat_information">
            <h1 className="flat_title">{title} </h1>
            <div className="flat_location"> {location}</div>
            <div className="tags">
              {Tags.map((tag, oneTag) => (
                <button key={oneTag} className="tag">
                  {tag}
                </button>
              ))}
            </div>
            <div className="flat_proprietaire">
              <div className="flat_guy">{host.name.split()}
              
                <img className="img_proprio" src={host.picture} alt="propriétaire"></img></div>
                </div>
            <div className="stars">
              <Stars ranking={selectFlat.rating}></Stars>
              </div>
             

           
          </div>

          <div className="flat_description">
            <Collapse
              title={"Description"}
              description={selectFlat.description}
            />
            <Collapse
              title={"Equipements"}
              description={equipments.map((equ) => (
                <li className="équipement_list" key={equ}>
                  {equ}
                </li>
              ))}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

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

                        <div className="flat_guy">{/* contact et photo */
/*             <div className="stars"></div>
                    </div>
                </div>
            </div> */
