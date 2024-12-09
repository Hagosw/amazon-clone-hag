import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Landing from "./Pages/Landing/Landing"; 
import Auth from "./Pages/Auth/Auth"; 
import Payment from "./Pages/Payment/Payment"; 
import Orders from "./Pages/Orders/Orders"; 
import Cart from "./Pages/Cart/Cart"; 
import Results from "./Pages/Results/Results"; 
import ProductDetail from "./Pages/ProductDetail/ProductDetail"; 
import { Elements } from "@stripe/react-stripe-js"; 
import { loadStripe } from "@stripe/stripe-js"; 
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; 


const stripePromise = loadStripe(
  "pk_test_51Q21RTKXqjMvF8GpDxoYiJrJakY0EfRCfYMvM8Cv5Fm3M1Uj7iPBTAYSDO8gFJZfNptmVcTLePW0Zo569vJv2vwC004KAlge8i"
);

function Routing() {
  return (
    <Router>
      <Routes>
        {/* Public route for the landing page */}
        <Route path="/" element={<Landing />} />

        {/* Public route for authentication (Sign In) */}
        <Route path="/auth" element={<Auth />} />

        {/* Protected route for payments, users must be logged in */}
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to pay"} 
              redirect={"/payments"} 
            >
              {/* Wrapping Payment component with Stripe Elements */}
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        {/* Protected route for viewing orders, users must be logged in */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to see your orders"} 
              redirect={"/orders"} 
            >
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* Route for showing product results based on category */}
        <Route path="/category/:categoryName" element={<Results />} />

        {/* Route for search results */}
        <Route path="/results" element={<Results />} />

        {/* Route for product details page */}
        <Route path="/products/:productId" element={<ProductDetail />} />

        {/* Route for the cart page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing; 
