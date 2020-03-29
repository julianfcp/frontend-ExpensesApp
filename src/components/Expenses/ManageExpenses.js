import React, { Component } from 'react';
import axios from 'axios';

export default class ManageExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            expenses: [],
            rows: ''
        }
    }

    async componentDidMount () {
        const userSession = await axios.get('http://localhost:4000/api/home');
        this.setState({
            userID: userSession.data.userID
        })
        this.getExpenses();
    }

    getExpenses = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/expenses/manageExpense', userID);
        if(res.data.success){
            this.setState({
                expenses: res.data.expenses
            })
            
        } else {
            console.log("Error getting expenses");
        }
    }




    render() {
        const rows = this.state.expenses.map(row => 
            <tr key={row._id}>
                <td>{row.expenseItem}</td>
                <td>{row.expenseCost}</td>
                <td>{row.date.slice(0,10)}</td>
            </tr>
            )
        return (
            <div className={this.props.hideManageExpenses}>
                <div className="card text-center card-Expenses  shadow">
                    <div className="card-header">
                        Manage Expenses
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
