import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

const columns = [
    {
        name: <h5>Income Concept</h5>,
        selector: 'incomeConcept',
        sortable: true,
    },
    {
        name: <h5>Income</h5>,
        selector: 'income',
        cell: row => <CurrencyFormat value={row.income} displayType={'text'} thousandSeparator={true} prefix={'$'} />,
        sortable: true,
        right: true,
    },
    {
        name: <h5>Date</h5>,
        selector: 'date',
        format: row => `${row.date.slice(0, 10)}`,
        sortable: true,
        right: true,
    },
    {
        name: <h5>Income type</h5>,
        selector: 'incomeType',
        sortable: true
    }
  ];



export default class ManageIncomes extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            incomes: []
        }
    }

    async componentDidMount () {
        const userSession = await axios.get('http://localhost:4000/api/home');
        this.setState({
            userID: userSession.data.userID
        })
        this.getIncomes();
    }

    getIncomes = async () => {
        const userID = {userID: this.state.userID}
        const res = await axios.post('http://localhost:4000/api/incomes/getIncomes', userID);
        if(res.data.success){
            this.setState({
                incomes: res.data.incomes
            })
            
        } else {
            console.log("Error getting Incomes");
        }
    }




    render() {
        return (
            <div className={this.props.hideManageIncomes}>
                <div className="card text-center card-Incomes  shadow">
                    <div className="card-header">
                        Manage Incomes
                    </div>
                    <div className="card-body">
                        <DataTable 
                            noHeader
                            columns={columns}
                            data={this.state.incomes}
                            highlightOnHover
                            pagination
                        />
                    </div>
                </div>
            </div>
        )
    }
}
