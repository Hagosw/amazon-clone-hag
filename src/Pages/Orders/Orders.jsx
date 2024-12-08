import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut"; 
import { db } from "../../Utility/firebase"; 
import { DataContext } from "../../components/DataProvider/DataProvider"; 
import classes from "./Orders.module.css"; 
import ProductCard from "../../components/Product/ProductCard"; 


function Orders() {
  const [{ user }] = useContext(DataContext); 
  const [orders, setOrders] = useState([]); 

 
  useEffect(() => {
    if (user) {
      
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]); 
    }
  }, [user]); 

  return (
    <LayOut>
      <section className={classes.orders}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {/* If there are no orders, display a message */}
          {orders?.length === 0 && (
            <div className={classes.orders__empty}>
              <p>You don't have orders yet.</p>
            </div>
          )}

          {/* Display each order */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p> {/* Display the order ID */}
                {/* For each order, map through the products in the basket and display each using ProductCard */}
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard
                    key={order.id}
                    product={order} // Pass the product data to ProductCard
                    flex={true} // Apply flexible layout
                    titleUp={true} // Show the title at the top of the card
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders; 
