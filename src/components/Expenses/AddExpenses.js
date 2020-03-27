import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class AddExpenses extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            categories: [],
            expenseDate: new Date(),
            expenseCategorySelected: '',

        }
    }

    async componentDidMount () {
        const userSession = await axios.get('http://localhost:4000/api/home');

        //const userID = {userId: this.props.userID}
        //console.log(userID)
        const res = await axios.post("http://localhost:4000/api/categories", {userId: userSession.data.userID})
        this.setState({
            categories: res.data
        })

    }


    handleDate = (date) => {
        this.setState({
            expenseDate: date
        })
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
                                    <form id="create-note-form" onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <Datepicker
                                                className="form-control"
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
                                                required />
                                        </div>
                                        {/** Expense Category */}
                                        <div className="form-group">
                                            <select
                                                className="form-control"
                                                name="categorySelected"
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
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Cost"
                                                name="expenseCost"
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
