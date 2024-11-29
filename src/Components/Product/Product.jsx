import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./Product.module.css"; 



function Product() {  
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(true);  
  
    useEffect(() => {  
      axios.get('https://fakestoreapi.com/products')  
        .then((res) => {  
          setProducts(res.data);  
          setLoading(false);  
        })  
        .catch((err) => {  
          console.log(err);  
          setLoading(false);  
        });  
    }, []);  
  
    if (loading) return <div>Loading...</div>;  
  
    return (  
      <section className={classes.product__container}>  
        {products.map((singleProduct) => (  
          <ProductCard Product={singleProduct} key={singleProduct.id} />  
        ))}  
      </section>  
    );  
  }

  export default Product