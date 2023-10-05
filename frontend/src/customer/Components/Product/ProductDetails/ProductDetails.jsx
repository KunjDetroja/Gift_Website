import { useParams } from "react-router-dom";
import {Button } from "@mui/material";
import HomeProductCard from "../../Home/HomeProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findProductById,
  findProducts,
} from "../../../../Redux/Customers/Product/Action";
import { getAllReviews } from "../../../../Redux/Customers/Review/Action";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");
  console.log(customersProduct.product);

 

  useEffect(() => {
    const data = { productId: productId, jwt };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));
  }, [productId]);

  useEffect(() => {
    dispatch(findProducts());
  }, []);
  console.log(customersProduct);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        {/* product details */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={ customersProduct.product?.imageUrl}
                alt={customersProduct.product?.category}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">
                {customersProduct.product?.title}
              </h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {customersProduct.product?.type}
              </h1>
            </div>
            {customersProduct.product?.flavour && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Flavour : {customersProduct.product?.flavour}</p>
              </div>
            )}
            {customersProduct.product?.shape && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Shape : {customersProduct.product?.shape}</p>
              </div>
            )}
            {customersProduct.product?.color && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Color : {customersProduct.product?.color}</p>
              </div>
            )}
            {customersProduct.product?.ingredient && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Ingredient : {customersProduct.product?.ingredient}</p>
              </div>
            )}
            {customersProduct.product?.weight && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Weight : {customersProduct.product?.weight}</p>
              </div>
            )}
            {customersProduct.product?.arrangement && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Arrangement : {customersProduct.product?.arrangement}</p>
              </div>
            )}
            {customersProduct.product?.pot_material && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>Pot_Material : {customersProduct.product?.pot_material}</p>
              </div>
            )}
            {customersProduct.product?.indoor_outdoor && (
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>
                  Indoor_Outdoor : {customersProduct.product?.indoor_outdoor}
                </p>
              </div>
            )}

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p>₹{customersProduct.product?.price}</p>
              </div>

              <form className="mt-10">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            {customersProduct.product?.description && (
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {customersProduct.product?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* rating and review section */}

        {/* similer product */}
        <section className=" pt-10">
          {/* <h1 className="py-5 text-xl font-bold">Similer Products</h1> */}
          <div className="flex flex-wrap space-y-5">
            {/* {console.log(customersProduct)} */}
            {customersProduct?.products?.content?.map((item) => {
              if (item.category === customersProduct?.product?.category) {
                
                <HomeProductCard product={item} />;
                console.log(item)
              }
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
