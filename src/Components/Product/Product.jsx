import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import ProductCard from "./ProductCard"; 
import classes from "./Product.module.css"; 
import Loader from "../Loader/Loader"; 


function Product() {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    setIsLoading(true); 
    axios
      .get("https://fakestoreapi.com/products") 
      .then((res) => {
        setProducts(res.data); 
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log("error: " + err); 
        setIsLoading(false); 
      });
  }, [setProducts]); 

  return (
    <>
      {/* Conditional rendering: show Loader component while data is being loaded */}
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product__container}>
          {/* Map through the products array and render a ProductCard for each product */}
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true} 
                key={singleProduct.id} 
                product={singleProduct} 
                sliceDesc={true} 
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product; 
