import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Loader from "./components/Loader";

const App = () => {
  
  return (
    <Router>
      <Loader />
    </Router>
  );
};

export default App;