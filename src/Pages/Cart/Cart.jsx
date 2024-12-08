import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut"; 
import { DataContext } from "../../components/DataProvider/DataProvider"; 
import ProductCard from "../../components/Product/ProductCard"; 
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat"; 
import { Link } from "react-router-dom"; 
import classes from "./Cart.module.css"; 
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io"; 
import { IoIosArrowUp } from "react-icons/io"; 


function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext); 

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount; 
  }, 0);


  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET, 
      item,
    });
  };
  
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET, 
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.cart__container}>
        <div className={classes.cart__card}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {/* Check if the basket is empty */}
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p> // Display a message if the cart is empty
          ) : (
          
            basket?.map((item, i) => (
              <section key={i} className={classes.cart__product}>
                <ProductCard
                  key={item.id}
                  renderAdd={false} 
                  product={item} // Pass the product data
                  add_description={true} // Show the full description
                  flex={true} // Use flexbox layout for the product card
                  titleUp={true} // Show the title at the top
                />
                <div className={classes.cart__btn__container}>
                  {/* Button to increment the quantity of the product */}
                  <button
                    className={classes.cart__btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} /> {/* Arrow-up icon */}
                  </button>
                  <span>{item.amount}</span>{" "}
                  {/* Display the product quantity */}
                  {/* Button to decrement the quantity of the product */}
                  <button
                    className={classes.cart__btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} /> {/* Arrow-down icon */}
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {/* If the basket is not empty, display the subtotal and checkout option */}
        {basket?.length !== 0 && (
          <div className={classes.cart__subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />{" "}
              {/* Display the total price formatted as currency */}
            </div>
            <span>
              <input type="checkbox" />{" "}
              {/* Option to mark the order as a gift */}
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>{" "}
            {/* Link to the checkout page */}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart; 
