import "../styles/header.css"
import "../styles/card.css"
import Header from "../components/home/Header";
import useEffect from "react";
import { Link } from "react-router-dom";
import {  useNavigate, useParams } from "react-router-dom";
import Card from "../components/home/Card";

export default function OneFlat (){
    const ID = useParams();
    console.log(ID)

    const selectFlat = useNavigate();
    useEffect(() => {
        let Flat = Card.find((Flat) => ID.id === Flat.id);
        
        if (!Flat) {
            selectFlat("/error");
        }
    }
    )
    return (
    
        <div id="house">
            <Header/>
    <div className="house">
   
   {Card.filter((Flat) => Flat.id === ID.id ).map(
      (Card, index) => (
         <Link to key={Card.id - index} className="house__boxes">
            <div
               title={Card.title}
               description={Card.description}
               />
           </Link>
      )) }
</div>
     
     </div>)}
