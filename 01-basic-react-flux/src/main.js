"use strict";

const $ = require("jquery"); // eslint-disable-line
const jQuery = require("jquery"); // eslint-disable-line
const React = require("react");
const ReactDOM = require("react-dom");

const Home = require("./components/homePage");

ReactDOM.render(<Home />, document.getElementById("app"));
