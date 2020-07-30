import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// Example code imports
import BubbleTheme from "./examples/BubbleTheme";


function App() {
  return <Router>
    {/* Example routes */}
    <Route path="/" exact component={BubbleTheme}/>
  </Router>;
}


export default App;
