$ = require("jquery"); // eslint-disable-line
jQuery = require("jquery"); // eslint-disable-line

{
    "use strict";
    const React = require("react");
    const ReactDOM = require("react-dom");
    const PropTypes = require("prop-types");

    const Header = require("./components/common/header");

    const Home = require("./components/homePage");
    const About = require("./components/about/aboutPage");

    class App extends React.Component {
        render() {
            let Child = Home;

            switch(this.props.route) {
                case "about": Child = About; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    }
    App.propTypes = {
        route: PropTypes.string
    };

    function render() {
        let route = window.location.hash.substr(1);
        ReactDOM.render(<App route={route} />, document.getElementById("app"));
    }

    window.addEventListener("hashchange", render);
    render();
}
