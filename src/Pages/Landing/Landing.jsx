import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import CarouselsEffect from "../../Components/Carousel/Carousel"; 
import Category from "../../components/Category/Category"; 
import Product from "../../components/Product/Product"; 
import classes from "./Landing.module.css";

function Landing() {
  return (
    <LayOut>

      <div className={classes.Landing__container}>
        <CarouselsEffect />
        <Category />
        <Product />
      </div>

    </LayOut>
  );
}

export default Landing; 
