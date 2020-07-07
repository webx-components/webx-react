import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./styles/global.scss";

import FramerTheme from "./themes/FramerTheme";
import DefaultTheme from "./themes/DefaultTheme";


function App() {
  return <Router>
    <Route path="/" exact component={DefaultTheme}/>
    <Route path="/framer" exact component={FramerTheme}/>
  </Router>;
}


export default App;
