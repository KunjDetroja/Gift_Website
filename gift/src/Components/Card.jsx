import React from "react";
import Carousel from "react-elastic-carousel";

import { productData } from "./data";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Card() {
  return (
    <div>
       <div className="App">
        <Carousel breakPoints={breakPoints}>
          {productData.map((x) => (
            <div>
              <img
                
                src={x.imageurl}
                alt="product"
              />
              <h2>{x.name}</h2>
              <p className="price">{x.price}</p>
              <p>{x.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Card;
