import React from "react";
import ReactDom from "react-dom";
import Router from "./router";

const Div = document.createElement("div");
Div.setAttribute("id", "root");
document.body.appendChild(Div);
ReactDom.render(<Router />, document.getElementById("root"));
