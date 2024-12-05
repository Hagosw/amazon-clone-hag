import React from 'react'
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

// function Routing () {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Landing/>}/>
//         <Route path='/auth' element={<Signup/>}/>
//         <Route path='/Payments' element={<Payment/>}/>
//         <Route path='/Orders' element={<Orders/>}/>
//         <Route path='/Cart' element={<Cart/>}/>
//       </Routes>
//     </Router>
//   )
// }

// export default Routing;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing React Router components for routing
// import Landing from "./Pages/Landing/Landing"; // Importing the Landing (home) page component
// import SignIn from "./Pages/Auth/Signup"; // Importing the SignIn page component
// import Payment from "./Pages/Payment/Payment"; // Importing the Payment page component
// import Orders from "./Pages/Orders/Orders"; // Importing the Orders page component
// import Cart from "./Pages/Cart/Cart"; // Importing the Cart page component
// import Results from "./Pages/Results/Results"; // Importing the Results page component for search results
// import ProductDetail from "./Pages/ProductDetail/ProductDetail"; // Importing the ProductDetail page component
// import { Elements } from "@stripe/react-stripe-js"; // Importing Stripe Elements to handle payment forms
// import { loadStripe } from "@stripe/stripe-js"; // Importing Stripe's loadStripe function to initialize Stripe
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"; // Importing the ProtectedRoute component to secure routes

// Initializing Stripe with the public key for handling payments

// const stripePromise = loadStripe(
  // 
// );

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Signup />} />
//         <Route
//           path="/payments"
//           element={
//             <ProtectedRoute
//               msg={"You must log in to pay"} 
//               redirect={"/payments"} >
              
//               <Elements>
//                 <Payment />
//               </Elements>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute
//               msg={"You must log in to see your orders"} 
//               redirect={"/orders"} >
//               <Orders />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/category/:categoryName" element={<Category />} />
//         <Route path="/results" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing; 




const stripePromise = loadStripe("pk_test_51QRz5xRshHFc2TXEHLzJAdNsxqmWSLGlgczCF7o7iWElkfHGDqeW76tNimQg0oNHyfBISwMkGsxEDqYej6BS2WKT008zlr01Jq");  

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