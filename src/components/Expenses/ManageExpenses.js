import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';


const columns = [
    {
        name: <h5>Item</h5>,
        selector: 'expenseItem',
        sortable: true,
    },
    {
        name: <h5>Cost</h5>,
        selector: 'expenseCost',
        cell: row => <CurrencyFormat value={row.expenseCost} displayType={'text'} thousandSeparator={true} prefix={'$'} />,
        sortable: true,
        right: true,
    },
    {
        name: <h5>Category</h5>,
        selector: 'expenseCategory',
        sortable: true,
        right: true,
    },
    {
        name: <h5>Date</h5>,
        selector: 'date',
        format: row => `${row.date.slice(0, 10)}`,
        sortable: true,
        right: true,
    }
  ];


export default class ManageExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            expenses: []
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
        return (
            <div className={this.props.hideManageExpenses}>
                <div className="card text-center card-Expenses  shadow">
                    <div className="card-header">
                        Manage Expenses
                    </div>
                    <div className="card-body">
                        <DataTable 
                            noHeader
                            columns={columns}
                            data={this.state.expenses}
                            highlightOnHover
                            pagination
                        />
                    </div>
                </div>
            </div>
        )
    }
}
