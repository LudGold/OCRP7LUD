import React from 'react'
import { useState } from 'react'
import "../styles/gallery.css"

function Gallery({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0);
    const length = pictures.length;
    // fonctions pour changer de slide avec les flèches
    const nextSlide = () => {
      setCurrentPicture(currentPicture === length - 1 ? 0 : currentPicture + 1);
    };
    const prevSlide = () => {
      setCurrentPicture(currentPicture === 0 ? length - 1 : currentPicture - 1);
    };
    
    return (
      <>
        <header/>
        {pictures.map(
          (picture, index) =>
            currentPicture === index && (
              <div key={picture} className="gallery_image">
                
                <img src={picture} alt="appartement" className='gallery_img' />
                {length > 1 ? (
                  // si il y a plus d'une image, on affiche les boutons, sinon rien
                  <>
                    <div className='gallery_arrows'>
                    <div className="gallery_arrowLeft" onClick={prevSlide}>
                                    {<img src="/arrow_left.svg" alt="arrow preview" /> }
                                    
                    </div>
                    <div className="gallery_arrowRight" onClick={nextSlide}>
                                    { <img src="/arrow_right.svg"  alt="arrow next" /> }
                                    
                      </div>
                    </div>
                    <span className="gallery_count">
                  {index + 1}/{length}
                </span> 
                  </>
                ) : null}
              </div>
            )
        )}
      </>
    );
  }
  
  export default Gallery;
  


