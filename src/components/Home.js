import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            userName: '',
            userEmail: ''
        }
    }

    async componentDidMount(){
        const userSession = await axios.get('http://localhost:4000/api/home');
        if(userSession.data.success) {
            // if no user session redirect to home
            // get user Data
            const userData = await axios.get('http://localhost:4000/api/users/'+userSession.data.userID);
            console.log(userData);
            this.setState({
                userID: userData.data._id,
                userName: userData.data.name,
                userEmail: userData.data.email
            })
        } else {
            // else redirect to login
            window.location.replace("http://localhost:3000/login");

        }


    }


    render() {
        return (
            <div>
                <Navigation />
                <div className="main">
                    <Sidebar userName={this.state.userName} userEmail={this.state.userEmail}/>
                    <div className="content">
                        <Breadcrumb />
                        <div className="dashboard">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Anual)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$140,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center cards-dashboard">
                                        <div className="card-header">
                                            Balance
                                        </div>
                                        <div className="card-body">
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center cards-dashboard">
                                        <div className="card-header">
                                            Today
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center cards-dashboard">
                                        <div className="card-header">
                                            This week
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center cards-dashboard">
                                        <div className="card-header">
                                            This Month
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center cards-dashboard">
                                        <div className="card-header">
                                            This year
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center cards-dashboard">
                                        <div className="card-header">
                                            Totals
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
