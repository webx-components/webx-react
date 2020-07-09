import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./styles/global.scss";

import BubbleTheme from "./themes/BubbleTheme";
import DefaultTheme from "./themes/DefaultTheme";


function App() {
  return <Router>
    <Route path="/" exact component={DefaultTheme}/>
    <Route path="/bubble" exact component={BubbleTheme}/>
  </Router>;
}


export default App;
