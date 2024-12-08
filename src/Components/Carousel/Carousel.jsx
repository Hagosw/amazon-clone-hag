import React from "react";
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./Carousel.module.css"; 
import {imgs}  from "./imgs/data"; 
import { IoIosArrowBack } from "react-icons/io"; 
import { IoIosArrowForward } from "react-icons/io"; 

function CarouselsEffect() {
  return (
    <>
      {/* Carousel Component */}
      <Carousel
        autoPlay={true} 
        infiniteLoop={true} 
        showIndicators={false} 
        showThumbs={false} 
        showStatus={false} 
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && ( 
            <button
              onClick={onClickHandler}
              title={label} 
              className={classes.carousel__prev} 
            >
              <IoIosArrowBack size={60} /> {/* Custom left arrow icon */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && ( 
            <button
              onClick={onClickHandler} 
              title={label} 
              className={classes.carousel__next} 
            >
              <IoIosArrowForward size={60} /> {/* Custom right arrow icon */}
            </button>
          )
        }
      >
        {/* Loop through images and render them inside the carousel */}
        {imgs.map((imageItemsLinks, i) => {
          return <img key={i} src={imageItemsLinks} alt={`carousel-${i}`} />; 
        })}
      </Carousel>

      {/* Placeholder for additional styling/content */}
      <div className={classes.hero__img}></div>
    </>
  );
}

export default CarouselsEffect; 
