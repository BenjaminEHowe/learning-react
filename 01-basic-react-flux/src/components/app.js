/*eslint-disable strict */ // can't run strict mode - need global variables

$ = require("jquery"); // eslint-disable-line
jQuery = require("jquery"); // eslint-disable-line

const React = require("react");
const { Route, Switch } = require("react-router-dom");

const Header = require("./common/header");

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={require("./homePage")}/>
                        <Route path="/about" component={require("./about/aboutPage")}/>
                        <Route path="/authors" component={require("./authors/authorsPage")}/>
                        <Route component={require("./404Page")} status={404}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

module.exports = App;
