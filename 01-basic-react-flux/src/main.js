"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const Router = require("react-router");
const routes = require("./routes");

ReactDOM.render((<Router>{routes}</Router>), document.getElementById("app"));
