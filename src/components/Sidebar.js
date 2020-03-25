import React, { Component } from 'react';

export default class Sidebar extends Component {

    
    menuItem = (e) => {
        console.log(e.target.className)
    }

    render() {
        return (
            <div>
                <nav id="sidebar">
                    <div className="userInfo">
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="avatar" className="profile-pic"/>
                            <h5 className="card-title text-center">Welcome {this.props.userName} !</h5>
                            <span className="card-title text-center">{this.props.userEmail}</span>
                        </div>
                    </div>
                    <ul className="list-unstyled components">
                        <li><div className="Menu-item activeMenu" onClick={this.menuItem}>Dashboard</div></li>
                        <li>
                            <div className="Menu-item"><a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Expenses</a></div>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li><div className="subMenu">Add Expense</div></li>
                                <li><div className="subMenu">Manage Expenses</div></li>
                            </ul>
                        </li>
                        <li>
                            <div className="Menu-item"><a id="collapseMenu" href="#homeSubmenu2" data-toggle="collapse" aria-expanded="false">Incomes</a></div>
                            <ul className="collapse list-unstyled" id="homeSubmenu2">
                                <li><div className="subMenu" >Add Income</div></li>
                                <li><div className="subMenu" >Manage Income</div></li>
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
