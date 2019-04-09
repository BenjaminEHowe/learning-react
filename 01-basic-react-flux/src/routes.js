"use strict";

const React = require("react");

const Router = require("react-router");
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

const routes = (
    <Route name="app" path="/" handler={require("./components/app")}>
        <DefaultRoute hander={require("./components/homePage")} />
        <Route name="about" hander={require("./components/about/aboutPage")} />
        <Route name="authors" handler={require("./components/authors/authorsPage")} />
    </Route>
);

module.exports = routes;
