import React from "react";
import ReactDOM from "react-dom/client"
import { Contador } from "./Contador";
import "../src/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
          <Contador valor={1}/>
    </React.StrictMode>
)