import React, { useContext } from "react"; 
import Rating from "@mui/material/Rating"; 
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"; 
import classes from "./Product.module.css"; 
import { Link } from "react-router-dom"; 
import { DataContext } from "../DataProvider/DataProvider"; 
import { Type } from "../../Utility/action.type"; 


function ProductCard({
  product, 
  flex, 
  add_description, 
  renderAdd, 
  sliceDesc, 
  titleUp, 
}) {
  
  const { image, title, id, rating, price, description } = product;

  
  const [state, dispatch] = useContext(DataContext);

  
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, 
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.productCard__container} ${
        flex ? classes.product_detail : "" 
      }`}
    >
      {/* Link to the product details page */}
      <Link to={`/products/${id}`}>
        <img
          src={image} // Product image
          alt={title} // Alt text for accessibility
          className={classes.productCard__img__container} // Styling for the image
        />
      </Link>

      <div>
        {/* Conditionally render title on top or as sliced */}
        {titleUp && <h3>{title}</h3>}
        {sliceDesc && <h3>{`${title.slice(0, 30)} ...`}</h3>}{" "}
        {/* Slice the title if sliceDesc is true */}
        {/* Conditionally render full or sliced description */}
        {add_description && (
          <div style={{ maxWidth: "750px" }}>{description}</div> 
        )}
        {sliceDesc && (
          <div style={{ maxWidth: "350px" }}>{`${description.slice(
            0,
            90
          )}...`}</div> // Sliced description
        )}
        {/* Display the product's rating */}
        <div className={classes.productCard__rating}>
          <Rating value={rating?.rate} precision={0.1} />{" "}
          {/* Rating with a precision of 0.1 */}
          <small>{rating?.count}</small> {/* Number of ratings */}
        </div>
        {/* Display the product's price formatted as currency */}
        <div>
          <CurrencyFormat amount={price} />{" "}
          {/* Custom currency formatting component */}
        </div>
        {/* Conditionally render "Add to Cart" button */}
        {renderAdd && (
          <button className={classes.productCard__button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard; 
