import React, { Component } from 'react';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            totalToday: '0',
            totalMonth: '0',
            totalYear: '0',
            incometotalMonth: '0',
            incometotalYear: '0'
        }
    }

    async componentDidMount () {
        const userSession = await axios.get('http://localhost:4000/api/home');
        this.setState({
            userID: userSession.data.userID
        })
        this.getExpensesToday();
        this.getExpensesThisMonth();
        this.getExpensesThisYear();
        this.getIncomesMonth();
        this.getIncomesYear();
    }

    getExpensesThisYear = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/dashboard/totalYear', userID);
        if(res.data.success){
            this.setState({
                totalYear: res.data.totalYear
            })
            
        } else {
            console.log("Error getting Total expenses Year");
        }
    }

    getExpensesThisMonth = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/dashboard/totalMonth', userID);
        if(res.data.success){
            this.setState({
                totalMonth: res.data.totalMonth
            })
            
        } else {
            console.log("Error getting Total expenses this Month");
        }
    }

    getExpensesToday = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/dashboard/totalToday', userID);
        if(res.data.success){
            this.setState({
                totalToday: res.data.totalToday
            })
            
        } else {
            console.log("Error getting Total expenses Today");
        }
    }

    getIncomesMonth = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/dashboard/incomeTotalMonth', userID);
        if(res.data.success){
            this.setState({
                incometotalMonth: res.data.totalMonth
            })
            
        } else {
            console.log("Error getting Total expenses this Month");
        }
    }

    getIncomesYear = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/dashboard/incomeTotalYear', userID);
        if(res.data.success){
            this.setState({
                incometotalYear: res.data.totalYear
            })
            
        } else {
            console.log("Error getting Total expenses this Year");
        }
    }

    render() {
        return (
            <div>
                <div className={'dashboard '+this.props.hideDash}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Income (Monthly)</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                <CurrencyFormat value={this.state.incometotalMonth} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                            </div>
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
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                <CurrencyFormat value={this.state.incometotalYear} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                            </div>
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
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center cards-dashboard">
                                <div className="card-header">
                                    Today
                                </div>
                                <div className="card-body">
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">
                                        <CurrencyFormat value={this.state.totalToday} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center cards-dashboard">
                                <div className="card-header">
                                    This week
                                </div>
                                <div className="card-body">
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">
                                        <CurrencyFormat value={this.state.totalMonth} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center cards-dashboard">
                                <div className="card-header">
                                    This year
                                </div>
                                <div className="card-body">
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">
                                        <CurrencyFormat value={this.state.totalYear} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center cards-dashboard">
                                <div className="card-header">
                                    Totals
                                </div>
                                <div className="card-body">
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
