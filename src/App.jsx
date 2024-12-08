import { useContext, useEffect } from "react"; 
import "./App.css"; 
import Routing from "./Router.jsx"; 
import { DataContext } from "./components/DataProvider/DataProvider.jsx"; 
import { auth } from "./Utility/firebase.js"; 
import { Type } from "./Utility/action.type.js"; 


function App() {
  const [dispatch] = useContext(DataContext); 

  // useEffect to handle Firebase authentication state
  useEffect(() => {
    // Firebase listener for auth state changes (user login/logout)
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // If a user is logged in, dispatch an action to set the user in the global state
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // If no user is logged in, set the user to null in the global state
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]); 

  // Render the routing component which manages page routing
  return <Routing />;
}

export default App; 
