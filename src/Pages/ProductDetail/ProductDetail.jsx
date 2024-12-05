import React, { useEffect } from 'react'
import classes from "./ProductDetail.module.css"
import { useParams } from 'react-router-dom'
import LayOut from '../../Components/LayOut/LayOut'
import axios from 'axios'
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail () {
  const {productId} = useParams()
  const [product, setProduct] = useState({})
  useEffect(()=>{
  axios.get(`${productUrl}/products/${productId}`) 
  .then((res) => {
    setProduct(res.data)
}).catch((err) => {
  console.log(err)
})
}, [])

  return (
    <LayOut>
      <ProductCard
      product={product}/>
    </LayOut>
    
  )
}

export default ProductDetail
