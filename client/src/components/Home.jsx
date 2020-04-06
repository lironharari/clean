import React, { Component } from 'react';
import Gallery from "react-photo-gallery";

class Home extends Component {
  
    render() {
      
      const photos = [
        {
          src: "/images/thumbnails/_DSC3766.jpg",
          width: 800,
          height: 600,
          title:"The Life and Death of Joe Shmoe - Drawings",
          href:"drawings"
        },                        
        {
          src: "/images/thumbnails/DSC_0027bbwerwer__a.jpg",
          width: 389,
          height: 581,
          title:"Street Photography - Kids",
          href:"kids"          
        },            
        {
          src: "/images/thumbnails/IMG_9819iiytrytryr.jpg",
          width: 800,
          height: 533,
          title:"Street Photography - Candid and Unposed",
          href:"street-photography"
        },
        {
          src: "/images/video/home-the-goddess-of-hope.jpg",
          width: 679,
          height: 800,
          title:"The Goddess of Hope - Original Music",
          href:"music"          
        },                                                      
        {
          src: "/images/thumbnails/DSC07512SMALL.jpg",
          width: 640,
          height: 427,
          title:"Life on the Railroads - Photography Documerntary",
          href:"life-on-the-railroads"          
        },
        {
          src: "/images/thumbnails/paracas-skulls.jpg",
          width: 640,
          height: 850,
          title:"Human History Revisited - YouTube Series",
          href:"human-history-revisited"          
        }        
      ];
      
      const imageRenderer = ({
        key,
        photo,     
      }) => {
        
        const handleOnClick = e => {
          window.location.href = e.target.getAttribute('data-href');
        };  
  
        return (
          <div 
              key={key} >  
                    <img                    
                      alt={photo.title}
                      data-href={photo.href}
                      className="galleryImage"
                      {...photo}
                      onClick={handleOnClick}
                    />                            
          </div>
        );
      };

      return (     
        <div className="homeGrid">
            <Gallery photos={photos} renderImage={imageRenderer}></Gallery>                      
        </div>
      );
    }
  }
  

export default Home;