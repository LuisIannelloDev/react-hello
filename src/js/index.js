//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { appName, logoUrl } from "./component/appName.js";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Cards from "./component/cards.jsx";


//render your react application
ReactDOM.render(<Home appName= {appName}  logoUrl={logoUrl}/>, document.querySelector("#app"));
