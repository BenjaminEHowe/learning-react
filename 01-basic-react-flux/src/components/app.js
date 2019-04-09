/*eslint-disable strict */ // can't run strict mode - need global variables

$ = require("jquery"); // eslint-disable-line
jQuery = require("jquery"); // eslint-disable-line

const React = require("react");
const RouteHandler = require("react-router").RouteHandler;

const Header = require("./common/header");

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid"><RouteHandler/></div>
            </div>
        );
    }
}

module.exports = App;
