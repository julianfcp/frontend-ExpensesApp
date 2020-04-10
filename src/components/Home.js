import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Dashboard from './Dashboard';
import AddExpenses from './Expenses/AddExpenses';
import ManageExpenses from './Expenses/ManageExpenses';
import AddIncomes from './Incomes/AddIncomes';
import ManageIncomes from './Incomes/ManageIncomes';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            userName: '',
            userEmail: '',
            hidespinner: '',
            hideBread: 'hideComp',
            hideNav: 'hideComp',
            hideSideb: 'hideComp',
            hideDash: 'hideComp',
            hideAddExpenses: 'hideComp',
            hideManageExpenses: 'hideComp',
            hideAddIncomes: 'hideComp',
            hideManageIncomes: 'hideComp'
        }
    }

    async componentDidMount(){
        const userSession = await axios.get('http://localhost:4000/api/home');
        setTimeout(async () => { 
            if(userSession.data.success) {
                // if no user session redirect to home
                // get user Data
                const userData = await axios.get('http://localhost:4000/api/users/'+userSession.data.userID);
                console.log(userData);
                await this.setState({
                    userID: userData.data._id,
                    userName: userData.data.name,
                    userEmail: userData.data.email,
                    hidespinner: 'hideComp',
                    hideBread: '',
                    hideNav: '',
                    hideSideb: '',
                    hideDash: ''
                });

            } else {
                // else redirect to login
                window.location.replace("http://localhost:3000/login");
    
            }
        }, 600);
    }

    handleHideComponent = (componentID) => {
        switch (componentID) {
            case "dashboard":
                this.setState({
                    hideDash: '',
                    hideAddExpenses: 'hideComp',
                    hideManageExpenses: 'hideComp',
                    hideAddIncomes: 'hideComp',
                    hideManageIncomes: 'hideComp'
                })
                break;
            case "Addexpenses":
                this.setState({
                    hideDash: 'hideComp',
                    hideAddExpenses: '',
                    hideManageExpenses: 'hideComp',
                    hideAddIncomes: 'hideComp',
                    hideManageIncomes: 'hideComp'
                })
                break;
            case "ManageExpenses":
                this.updateExpensesTable();
                this.setState({
                    hideDash: 'hideComp',
                    hideAddExpenses: 'hideComp',
                    hideManageExpenses: '',
                    hideAddIncomes: 'hideComp',
                    hideManageIncomes: 'hideComp'
                })
                break;
            case "AddIncomes":
                this.setState({
                    hideDash: 'hideComp',
                    hideAddExpenses: 'hideComp',
                    hideManageExpenses: 'hideComp',
                    hideAddIncomes: '',
                    hideManageIncomes: 'hideComp'
                })
                break;
            case "ManageIncomes":
                this.updateIncomesTable();
                this.setState({
                    hideDash: 'hideComp',
                    hideAddExpenses: 'hideComp',
                    hideManageExpenses: 'hideComp',
                    hideAddIncomes: 'hideComp',
                    hideManageIncomes: ''
                })
                break;
            default:
                break;
        }
    }

    updateExpensesTable = () => {
        this.manageExpenses.getExpenses();
    }

    updateIncomesTable = () => {
        this.manageIncomes.getIncomes();
    }



    render() {
        return (
            <div>
                <Navigation hideNav={this.state.hideNav}/>
                <div className="main">
                    <Sidebar 
                        userName={this.state.userName} 
                        userEmail={this.state.userEmail} 
                        show={this.state.hideComp}
                        actionHide={this.handleHideComponent}
                        hideSideb={this.state.hideSideb}
                    />
                    <div className="content">
                        <Breadcrumb hideBread={this.state.hideBread}/>
                        <Dashboard hideDash={this.state.hideDash}/>
                        <AddExpenses hideAddExpenses={this.state.hideAddExpenses} userID={this.state.userID}/>
                        <ManageExpenses hideManageExpenses={this.state.hideManageExpenses} ref={updateTable => {this.manageExpenses = updateTable}}/>
                        <AddIncomes hideAddIncomes={this.state.hideAddIncomes} userID={this.state.userID}/>
                        <ManageIncomes hideManageIncomes={this.state.hideManageIncomes} ref={updateTable => {this.manageIncomes = updateTable}}/>
                        
                        <Spinner hidespinner={this.state.hidespinner}/>
                    </div>
                </div>
            </div>
        )
    }
}
