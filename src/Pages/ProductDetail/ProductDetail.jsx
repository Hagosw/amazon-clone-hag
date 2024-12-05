import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css"
import { useParams } from 'react-router-dom'
import LayOut from '../../Components/LayOut/LayOut'
import axios from 'axios'
import ProductCard from "./../components/Product/ProductCard";
import { productUrl } from '../../Api/endPoints'
import Loader from '../../Components/Loader/Loader'


function ProductDetail () {

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading]=useState(false)
  const {productId} = useParams()

  useEffect(()=>{
  setIsLoading(true)
  axios.get(`${productUrl}/products/${productId}`) 
  .then((res) => {
  setProduct(res.data);
  setIsLoading(false)
}).catch((err) => {
  console.log(err)
  setIsLoading(false)
})
}, [])

  return (
    <LayOut>
      {isLoading? (<Loader/>):(<ProductCard
      product={product}
      flex = {true}
      renderDesc={true}
      />)}
    </LayOut>
    
  )
}

export default ProductDetail
