import React from "react";
import "./detail.css";
import "../../App.css";
import { Link, useParams } from "react-router-dom";

const App = () => {
  console.log(useParams);
  let { id } = useParams();
  
};
export default App;
