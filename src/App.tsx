import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// Example code imports
import "./examples/css/global.scss";
import BubbleTheme from "./examples/BubbleTheme";
import DefaultTheme from "./examples/DefaultTheme";
import DefaultStyle from "./components/styles/DefaultStyle";


function App() {
  return <Router>
    {/* Example routes */}
    <DefaultStyle />

    <Route path="/" exact component={DefaultTheme}/>
    <Route path="/bubble" exact component={BubbleTheme}/>
  </Router>;
}


export default App;
