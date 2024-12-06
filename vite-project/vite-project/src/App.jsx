import React from "react";
import './App.css';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { ThemeProvider } from "./ContextProvider";

function App() {
  
     return (
        <ThemeProvider>

             <ComponentA/>
             <ComponentB/>

        </ThemeProvider>
  )
}

export default App;