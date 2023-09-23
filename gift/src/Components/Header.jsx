import React from 'react';
import  { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Header.css'
import { Carousel } from 'react-responsive-carousel';
function Header() {
  const [img,setImg] = useState('imageUrl')
  const demodata = [
    {
      "imageUrl":"https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Daughters-Day_Desk.jpg"
    },
    {
      "imageUrl": "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday_Desk_13sept.jpg"
    },
    {
      "imageUrl": "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Cake-Banner_Desk_11sep.jpg"
    },
    {
      "imageUrl": "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Desk-Hero-Banner_Gift-Hampers2.jpg"
    },
    {
      "imageUrl": "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Desk-Hero-Banner_Chocolates_6sept.jpg"
    }
  ]
return (
  <>
  
  <div className="App">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        style={{ height: '100px' }}
      >
        {demodata.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
   
}

export default Header;
