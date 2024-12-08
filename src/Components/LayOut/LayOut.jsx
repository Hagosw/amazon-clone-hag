import React from "react";
import Header from "../Header/Header"; 


function LayOut({ children }) {
  return (
    <div>
      {/* Render the Header component at the top of the layout */}
      <Header />

      {/* Render any child components passed to the LayOut component */}
      {children}
    </div>
  );
}

export default LayOut; 
