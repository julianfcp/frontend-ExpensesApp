import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Navigation extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }


    onLogout = async () => {
        await axios.get('http://localhost:4000/api/logout');
        window.location.replace("http://localhost:3000/");
    }


    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-light bg-light fixed-top "+ this.props.hideNav}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <div className="appTitle">
                            <h2>Expenses APP</h2>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item active"}>
                                <Link id="aLogout" className="nav-link" to="/user" onClick={this.onLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>            
        )
    }
}