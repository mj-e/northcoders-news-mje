import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render () {
        return (
            <div>
                <style>{css}</style>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <img className="navbar-brand" href="/" src="/images/logo.png"/>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to='/' data-toggle="collapse" data-target=".navbar-collapse.in">Home</Link></li>
                                <li><Link to='/football' data-toggle="collapse" data-target=".navbar-collapse.in">Football</Link></li>
                                <li><Link to='/cooking' data-toggle="collapse" data-target=".navbar-collapse.in">Cooking</Link></li>
                                <li><Link to='/coding' data-toggle="collapse" data-target=".navbar-collapse.in">Coding</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;

const css = `
.navbar .nav > li > a {
     float: none;
    color:  #0c2c84;
}`;