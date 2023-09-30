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
import Alert from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch,useSelector } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";
// import { useNavigate } from "react-router-dom";

const CreateCakeForm = () => {
  // const navigate=useNavigate()
  const productRef = useRef()
  const [productData, setProductData] = useState({
    imageUrl: "",
    title: "",
    type:"",
    price: "",
    flavour:"",
    shape:"",
    ingredient:"",
    weight:"",
    description: "",
    category:"cake"
  });

  const productState = useSelector((store)=>store)
const dispatch=useDispatch();
const jwt=localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  useEffect(()=>{
    console.log(productRef?.current,productState?.adminsProduct?.products)
    if(productRef?.current && productRef?.current?.length !== productState?.adminsProduct?.products?.length){
      // navigate("/admin/")
      setProductData({
        imageUrl: "",
        title: "",
        type:"",
        price: "",
        flavour:"",
        shape:"",
        ingredient:"",
        weight:"",
        description: "",
        category:"cake"
      })
      alert(
        "Product added successfully!"
      )
      productRef.current = productState?.adminsProduct?.products
    }
    else{
      productRef.current = productState?.adminsProduct?.products
    }
    
  },[productState?.adminsProduct?.products])
  // const handleSizeChange = (e, index) => {
  //   let { name, value } = e.target;
  //   name==="size_quantity"?name="quantity":name=e.target.name;

  //   const sizes = [...productData.size];
  //   sizes[index][name] = value;
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

  // const handleAddSize = () => {
  //   const sizes = [...productData.size];
  //   sizes.push({ name: "", quantity: "" });
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

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
    dispatch(createProduct({data:productData,jwt}))
    console.log(productData);
  };

  // const handleAddProducts=(data)=>{
  //   for(let item of data){
  //     const productsData={
  //       data:item,
  //       jwt,
  //     }
  //     dispatch(createProduct(productsData))
  //   }
  // }

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Cake
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
              label="Flavour"
              name="flavour"
              value={productData.flavour}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Ingreient"
              name="ingredient"
              value={productData.ingredient}
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Shape"
              name="shape"
              value={productData.shape}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Weight"
              name="weight"
              value={productData.weight}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Cake
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

export default CreateCakeForm;
