import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            alert: 'hidden',
            message: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault(); // evita reiniciar la pagina
        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        const res = await axios.post('http://localhost:4000/api/login', loginUser);
        console.log(res);
        if(res.data.success){
            this.setState({
                alert: "alert alert-success",
                message: res.data.message
            })
            window.location.replace("http://localhost:3000/");
        } else {
            this.setState({
                alert: "alert alert-danger",
                message: res.data.message
            })
        }
    }

    checkLogin = () => {
        
    }

    render() {
        return (
            <div>
                <div className={this.state.alert} role="alert">
                    {this.state.message}
                </div>
                <div className="container col-md-6">
                    <div className="card-body">
                        <div className="card-title"><h4>Log In</h4></div>
                        <form id="create-note-form" onSubmit={this.onSubmit} method="post">
                            {/** Email */}
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.onInputChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.onInputChange}
                                    required />
                            </div>
                            {/** Password */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Login
                            </button>
                        </form>
                        <div className="card-footer text-muted">
                            <a href="/register"> Register</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

