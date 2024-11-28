import React from "react";
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./Carousel.module.css"; 
import { img } from "./img/data"; 
import { IoIosArrowBack } from "react-icons/io"; 
import { IoIosArrowForward } from "react-icons/io"; 


function CarouselsEffect() {
  return (
    <>
      <Carousel
        autoPlay={true} // Enables continuous looping through images
        infiniteLoop={true} 
        showIndicators={false} // Hides the small indicator dots under the carousel
        showThumbs={false} 
        showStatus={false} 
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && ( // Only render the previous arrow if there is a previous item
            <button
              onClick={onClickHandler} // Click event handler for the previous arrow
              title={label} // Sets the label for accessibility
              className={classes.carousel__prev} // Applies styles from the CSS module
            >
              <IoIosArrowBack size={60} /> {/* Custom left arrow icon */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && ( // Only render the next arrow if there is a next item
            <button
              onClick={onClickHandler} // Click event handler for the next arrow
              title={label} // Sets the label for accessibility
              className={classes.carousel__next} // Applies styles from the CSS module
            >
              <IoIosArrowForward size={60} /> {/* Custom right arrow icon */}
            </button>
          )
        }
      >
        {/* Loop through images and render them inside the carousel */}
        {img.map((imageItemsLinks, i) => {
          return <img key={i} src={imageItemsLinks} alt={`carousel-${i}`} />; // Renders each image in the carousel
        })}
      </Carousel>

      {/* Placeholder for additional styling/content */}
      <div className={classes.hero__img}></div>
    </>
  );
}

export default CarouselsEffect; 
