import React from "react"; 
import "./index.css"; 
import ReactDOM from 'react-dom/client'
import App from './App'
import {initialState, reducer} from './Utility/reducer'

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <DataProvider reducer={reducer} initialState={initialState}>

            <App/>

        </DataProvider>

    </React.StrictMode>
    
);

