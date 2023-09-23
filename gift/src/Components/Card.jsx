import React from "react";
import Carousel from "react-elastic-carousel";

import { productData } from "./data";
import ProductPage from "./ProductPage";

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
        <Carousel breakPoints={breakPoints} >
          {productData.map((x) => (
            <div>
              <img
                style={{height:'250px',padding:'7px'}}
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
      <ProductPage/>
    </div>
  );
}

export default Card;
