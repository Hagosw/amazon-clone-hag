import React from "react"; 
import { FadeLoader } from "react-spinners"; 


function Loader() {
  return (
    <div
      style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "50vh", 
      }}
    >
      {/* Rendering the FadeLoader spinner with custom color */}
      <FadeLoader color="#ff9900" />
    </div>
  );
}

export default Loader; 
