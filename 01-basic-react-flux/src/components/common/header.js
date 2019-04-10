"use strict";

const React = require('react');
const { Link } = require("react-router-dom");

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/pluralsight-logo.png"  alt="Pluralsight" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/authors">Authors</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
        
module.exports = Header;
