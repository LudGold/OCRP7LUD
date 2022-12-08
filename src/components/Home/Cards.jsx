/* /*  import React, { useState, useEffect } from "react";
import Data from "../../Flat.json";

export default function Cards() {
    const {id, title, cover} = props
    return
    
    <Link to={`/OneFlat/${id}`}</Link>
     Data.map{ Flat =>
<CardFlat           key={`${Flat.id}`}
                    label={Flat.title}
                    cover={Flat.cover}/>
            }}; */
            
    
    
    
    
    /* const [data, setData] = useState([]); 
    
    
    
    
    const getData=()=>{
    fetch('data.json')
    .then(function(response){
        
        return response.json();
      })
      .then(function(data) {
        setData(data);
      });}

      useEffect(()=>{
      getData()
      }, [])
    return (
        <div>
            
            <h1>Cards</h1>
            {Flat.map((data) =>(
                <Card
                    key={`${Flat.id}`}
                    label={Flat.title}
                    cover={Flat.cover}
                    />
                            ))}

        </div>
    )
};
   

    function CardLogement() {
const {id, title, cover} = props;

    return <Link to={`/housing/${id}`}>
    puis dans la page d'acceuil tu ajoutes bien les props de ton composant :

import logements from "...../logements.json";

Puis dans ton composant :

logements.map{ logement =>
<CardLogement id ={logement.id}/>
}

  



 */