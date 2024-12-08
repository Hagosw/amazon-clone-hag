import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client"; 
import App from "./App.jsx"; 
import "./index.css"; 
import { DataProvider } from "./components/DataProvider/DataProvider.jsx"; 
import { initialState, reducer } from "./Utility/reducer.js"; 

// Creating the root element in the DOM and rendering the app inside it
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrapping the App component with the DataProvider to provide global state to the entire app */}
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
