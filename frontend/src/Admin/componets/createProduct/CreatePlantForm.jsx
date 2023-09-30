import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";

const CreatePlantForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    title: "",
    type: "",
    price: "",
    pot_material: "",
    indoor_outdoor: "",
    description: "",
    category: "plant",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  // const handleRemoveSize = (index) => {
  //   const sizes = [...productData.size];
  //   sizes.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData, jwt }));
    console.log(productData);
  };

  const productRef = useRef();
  const productState = useSelector((store) => store);
  useEffect(() => {
    console.log(productRef?.current, productState?.adminsProduct?.products);
    if (
      productRef?.current &&
      productRef?.current?.length !==
        productState?.adminsProduct?.products?.length
    ) {
      // navigate("/admin/")
      setProductData({
        imageUrl: "",
        title: "",
        type: "",
        price: "",
        pot_material: "",
        indoor_outdoor: "",
        description: "",
        category: "plant",
      });

      alert("Product added successfully!");
      productRef.current = productState?.adminsProduct?.products;
    } else {
      productRef.current = productState?.adminsProduct?.products;
    }
  }, [productState?.adminsProduct?.products]);

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Plant
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Type"
              name="type"
              value={productData.type}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pot Material"
              name="pot_material"
              value={productData.pot_material}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Indoor/Outdoor"
              name="indoor_outdoor"
              value={productData.indoor_outdoor}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Plant
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreatePlantForm;
