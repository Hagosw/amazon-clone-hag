import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Landing from './Pages/Landing/Landing';
import Signup from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Results from "./Pages/Results/Results";
import Cart from './Pages/Cart/Cart';
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Category from './components/Category/Category';
import { loadStripe } from "@stripe/stripe-js";  
import { Elements } from "@stripe/react-stripe-js";   



const stripePromise = loadStripe('#')

function Routing() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Landing />} />  
        <Route path="/auth" element={<Signup />} />  
        <Route  
          path="/payments"  
          element={  
            <ProtectedRoute msg={"You must log in to pay"} redirect={"/payments"}>  
              <Elements stripe={stripePromise}>  
                <Payment />  
              </Elements>  
            </ProtectedRoute>  
          }  
        />  
        <Route  
          path="/orders"  
          element={  
            <ProtectedRoute msg={"You must log in to see your orders"} redirect={"/orders"}>  
              <Orders />  
            </ProtectedRoute>  
          }  
        />  
        <Route path="/category/:categoryName" element={<Category />} />  
        <Route path="/results" element={<Results />} />  
        <Route path="/products/:productId" element={<ProductDetail />} />  
        <Route path="/cart" element={<Cart />} />  
      </Routes>  
    </Router>  
  );  
}  

export default Routing;