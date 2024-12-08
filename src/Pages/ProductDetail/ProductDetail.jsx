import React, { useEffect, useState } from "react";
import { productUrl } from "../../Api/endPoints"; 
import LayOut from "../../components/LayOut/LayOut"; 
import { useParams } from "react-router-dom"; 
import ProductCard from "../../components/Product/ProductCard"; 
import Loader from "../../components/Loader/Loader"; 
import axios from "axios"; 


function ProductDetail() {
  const [product, setProduct] = useState({}); 
  const { productId } = useParams(); 
  const [isLoading, setIsLoading] = useState(false); 

 
  useEffect(() => {
    setIsLoading(true); 
    axios
      .get(`${productUrl}/products/${productId}`) 
      .then((res) => {
        setProduct(res.data); 
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err); t
        setIsLoading(false); 
      });
  }, [productId]); 
  return (
    <LayOut>
      {/* If loading is true, show the Loader component, otherwise show the product details */}
      {isLoading ? (
        <Loader />
      ) : (
        // Display the product using ProductCard component once the data is available
        <ProductCard
          key={product.id}
          titleUp={true} 
          product={product} 
          flex={true} 
          add_description={true} 
          add_button={true} 
          renderAdd={true} 
        />
      )}
    </LayOut>
  );
}

export default ProductDetail; 
