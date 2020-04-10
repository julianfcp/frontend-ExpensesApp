import React, { Component } from 'react';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeDash: 'activeMenu',
            activeAddExpenses: '',
            activeManageExpenses: '',
            activeAddIncomes: '',
            activeManageIncomes: ''
        }
    }

    
    menuItem = (e) => {
        const selection = e.target.id;
        
        switch (selection) {
            case "dashboard":
                this.props.actionHide(selection);
                this.setState({
                    activeDash: 'activeMenu',
                    activeAddExpenses: '',
                    activeManageExpenses: '',
                    activeAddIncomes: '',
                    activeManageIncomes: ''
                })
                break;
            case "Addexpenses":
                this.props.actionHide(selection);
                this.setState({
                    activeDash: '',
                    activeAddExpenses: 'activeMenu',
                    activeManageExpenses: '',
                    activeAddIncomes: '',
                    activeManageIncomes: ''
                })
                break;
            case "ManageExpenses":
                this.props.actionHide(selection);
                this.setState({
                    activeDash: '',
                    activeAddExpenses: '',
                    activeManageExpenses: 'activeMenu',
                    activeAddIncomes: '',
                    activeManageIncomes: ''
                })
            break;
            case "AddIncomes":
                this.props.actionHide(selection);
                this.setState({
                    activeDash: '',
                    activeAddExpenses: '',
                    activeManageExpenses: '',
                    activeAddIncomes: 'activeMenu',
                    activeManageIncomes: ''
                })
                break;
            case "ManageIncomes":
                    this.props.actionHide(selection);
                    this.setState({
                        activeDash: '',
                        activeAddExpenses: '',
                        activeManageExpenses: '',
                        activeAddIncomes: '',
                        activeManageIncomes: 'activeMenu'
                    })
                break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <div className={this.props.hideSideb}>
                <nav id="sidebar">
                    <div className="userInfo">
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="avatar" className="profile-pic"/>
                            <h5 className="card-title text-center">Welcome {this.props.userName} !</h5>
                        </div>
                    </div>
                    <ul className="list-unstyled components">
                        <li><div className={"Menu-item "+ this.state.activeDash} onClick={this.menuItem} id="dashboard">Dashboard</div></li>
                        <li>
                            <div className="Menu-item "><a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" id="expenses">Expenses</a></div>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li><div className={"subMenu "+ this.state.activeAddExpenses} id="Addexpenses" onClick={this.menuItem}>Add Expense</div></li>
                                <li><div className={"subMenu "+ this.state.activeManageExpenses} id="ManageExpenses" onClick={this.menuItem}>Manage Expenses</div></li>
                            </ul>
                        </li>
                        <li>
                            <div className="Menu-item"><a id="collapseMenu" href="#homeSubmenu2" data-toggle="collapse" aria-expanded="false">Incomes</a></div>
                            <ul className="collapse list-unstyled" id="homeSubmenu2">
                                <li><div className={"subMenu "+ this.state.activeAddIncomes} id="AddIncomes" onClick={this.menuItem} >Add Income</div></li>
                                <li><div className={"subMenu "+ this.state.activeManageIncomes} id="ManageIncomes" onClick={this.menuItem} >Manage Income</div></li>
                            </ul>
                        </li>
                        <li><div className="Menu-item">Import</div></li>
                        <li><div className="Menu-item">Settings</div></li>
                    </ul>
                </nav>

            </div>
        )
    }
}
