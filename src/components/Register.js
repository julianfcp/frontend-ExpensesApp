import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            conf_password: '',
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
        const registerUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            conf_password: this.state.conf_password
        }
        const res = await axios.post('http://localhost:4000/api/register', registerUser);
        if(res.data.success){
            this.setState({
                alert: "alert alert-success",
                message: res.data.message
            })
            window.location.replace("/login");
        } else {
            this.setState({
                alert: "alert alert-danger",
                message: res.data.map(data => data.message)
            })
        }
        
    }


    render() {
        return (
            <div>
                <div className={this.state.alert} role="alert">
                    {this.state.message}
                </div>
                <div className="container col-md-6">
                    <div className="card-body">
                        <div className="card-title"><h4>Register</h4></div>
                        <form id="create-note-form" onSubmit={this.onSubmit} method="post">
                            {/** Name */}
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.onInputChange}
                                    required />
                            </div>
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
                            {/** Password */}
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.onInputChange}
                                    required />
                            </div>
                            {/** Confirm Password */}
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    name="conf_password"
                                    onChange={this.onInputChange}
                                    required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Login
                            </button>
                        </form>
                        <div className="card-footer text-muted">
                            <a href="/login"> Login</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
