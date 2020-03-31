import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

export default class AddExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            categories: [],
            expenseDate: new Date(),
            expenseCategorySelected: '',
            expenseItem: '',
            expenseCost: '',
            categorySelected: '',
            expenseCreated: 'hideComp',
            expenseError: 'hideComp'
        }
    }

    async componentDidMount () {
        const userSession = await axios.get('http://localhost:4000/api/home');
        this.setState({
            userID: userSession.data.userID
        })
        //const userID = {userId: this.props.userID}
        //console.log(userID)
        const res = await axios.post("http://localhost:4000/api/categories", {userId: userSession.data.userID});
        this.setState({
            categories: res.data,
            categorySelected: res.data[0].category
        })
    }

    handleDate = (date) => {
        this.setState({
            expenseDate: date
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onDateChange = (date) => {
        this.setState({
            expenseDate: date,
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newExpense = {
            userID: this.state.userID,
            expenseItem: this.state.expenseItem,
            expenseCost: this.state.expenseCost.replace(/[$,]/g,''),
            date: this.state.expenseDate,
            expenseCategory: this.state.categorySelected
        }
        const res = await axios.post('http://localhost:4000/api/expenses', newExpense);
        if(res.data.success){
            document.getElementById("create-expense-form").reset();
            this.setState({ 
                expenseDate: new Date(),
                expenseCreated: '',
                expenseCost: ''
            });
        } else {
            this.setState({ 
                expenseError: ''
            });
        }
    }

    render() {
        return (
            <div className={this.props.hideAddExpenses}>
                <div className="card text-center card-Expenses  shadow">
                    <div className="card-header">
                        Add Expenses
                    </div>
                    <div className="card-body">
                        <div className="content-form-addExpenses">
                            <div className="row">
                                <div className="col">
                                    <div className={"alert alert-success "+ this.state.expenseCreated} id="success-alert">
                                        <button type="button" className="close" data-dismiss="alert">x</button>
                                        <strong>Success! </strong> Expense Created
                                    </div>
                                    <div className={"alert alert-danger "+ this.state.expenseError} id="error-alert">
                                        <button type="button" className="close" data-dismiss="alert">x</button>
                                        <strong>Something was wrong </strong>
                                    </div>
                                    <form id="create-expense-form" onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <Datepicker
                                                className="form-control"
                                                dateFormat='dd-MM-yyyy'
                                                selected={this.state.expenseDate}
                                                onChange={this.handleDate}
                                            >
                                            </Datepicker> 
                                        </div>
                                        {/** Expense Item */}
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Item"
                                                name="expenseItem"
                                                onChange={this.onInputChange}
                                                required />
                                        </div>
                                        {/** Expense Category */}
                                        <div className="form-group">
                                            <select
                                                className="form-control"
                                                name="categorySelected"
                                                onChange={this.onInputChange}
                                                value={this.state.categorySelected}>
                                                {
                                                    this.state.categories.map(category =>
                                                        <option
                                                            className=""
                                                            key={category._id}
                                                            value={category.category}>
                                                            {category.category}
                                                        </option>)
                                                }
                                            </select>  
                                        
                                        </div>
                                        {/** Expense Cost */}
                                        <div className="form-group">
                                            <CurrencyFormat 
                                                thousandSeparator={true} 
                                                prefix={'$'}
                                                className="form-control"
                                                placeholder="Cost"
                                                name="expenseCost"
                                                value={this.state.expenseCost}
                                                onChange={this.onInputChange}
                                                required 
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Add Expense
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
