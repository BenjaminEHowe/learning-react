"use strict";

const React = require("react");
const createReactClass = require("create-react-class");

var Home = createReactClass({
    "render": () => {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux, for ultra-responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;
