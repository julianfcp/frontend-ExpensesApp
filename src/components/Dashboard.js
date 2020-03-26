import React, { Component } from 'react'

export default class Dashboard extends Component {
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
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center cards-dashboard">
                                <div className="card-header">
                                    This year
                                </div>
                                <div className="card-body">
                                    <div className="value-card h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
