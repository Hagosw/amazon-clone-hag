import React from "react";
import LayOut from "../../components/LayOut/LayOut"; 
import CarouselsEffect from "../../components/Carousel/Carousel"; 
import Category from "../../components/Category/Category"; 
import Product from "../../components/Product/Product"; 
import classes from "./Landing.module.css";

function Landing() {
  return (
    <LayOut>
      <div className={classes.Landing__container}>
        {/* Carousel section displaying a slideshow */}
        <CarouselsEffect />

        {/* Category section displaying product categories */}
        <Category />

        {/* Product section displaying a list of products */}
        <Product />
      </div>
    </LayOut>
  );
}

export default Landing; 
