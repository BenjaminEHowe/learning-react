"use strict";

var React = require('react');

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/img/pluralsight-logo.png"  alt="Pluralsight" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link"  href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link"  href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link"  href="#authors">Authors</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
        
module.exports = Header;
