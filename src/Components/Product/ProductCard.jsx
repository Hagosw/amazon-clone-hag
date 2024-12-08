import React from 'react'
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from 'react';



function ProductCard({ Product, flex, renderDesc }) {  
    const { image, title, id, rating, price, description } = Product;  
    const [state, dispatch]=useContext(DataContext)
       
      const addToCart= ()=>{
        dispatch ({
            type:Type.ADD_TO_BASKET,
            item: { 
                image, title, id, rating, price, description
            }
        })
      }
    return (  
        <div className={`${classes.productCard__container} ${flex?classes.product_flexed : ''}`}>  

            <Link to={`product/${id}`}>  
                <img src={image} alt="" className={classes.productCard__container}/>  
            </Link>  
            <div>  
                <h3>{title}</h3>  
                {renderDesc && <div>{description}</div>}
                <div className={classes.productCard__rating}>  
                    <Rating value={rating?.rate} precision={0.1} />  
                    <small>{rating?.count}</small>  
                </div>  
                <div>  
                    <CurrencyFormat amount={price} />  
                </div>  
                <button className={classes.productCard__button}onClick={addToCart}>  
                    Add to cart  
                </button>  
            </div>  
        </div>  
    );  
}  

export default ProductCard;  
