import React from "react";
import ReactDOM from "react-dom";
import "../FunctionFile/styles.css";
import Heading from "../FunctionFile/Heading.jsx";
import MyList from "../FunctionFile/List.jsx";

ReactDOM.render(
  <div>
    <Heading />

    <MyList />
  </div>,

  document.getElementById("root")
);
