import React, { useEffect } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../Redux/Customers/Product/Action";

const Homepage = () => {
  const dispatch = useDispatch();
  const productdata = useSelector(
    (store) => store.customersProduct.products.content
  );
  useEffect(() => {
    dispatch(findProducts());
  }, []);
  console.log(productdata);
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />
      <div className="space-y-10 py-20">
        <HomeProductSection
          data={productdata?.filter(
            (item) => item?.category?.toLowerCase() === "cake"
          )}
          section={"Cake"}
        />
        <HomeProductSection
          data={productdata?.filter(
            (item) => item?.category?.toLowerCase() === "flower"
          )}
          section={"Flower"}
        />
        <HomeProductSection
          data={productdata?.filter(
            (item) => item?.category?.toLowerCase() === "plant"
          )}
          section={"Plant"}
        />
      </div>
    </div>
  );
};

export default Homepage;
