import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

export default class AddIncome extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            incomeDate: new Date(),
            incomeConcepts: [],
            incomeConceptSelected: '',
            income: '',
            incomeCreated: 'hideComp',
            incomeError: 'hideComp',
            incomeType: 'Occasional'
        }
    }

    async componentDidMount () {
        const userSession = await axios.get('http://localhost:4000/api/home');
        this.setState({
            userID: userSession.data.userID
        })
        // get income concepts
        const res = await axios.post("http://localhost:4000/api/inconcepts/getConcepts");
        this.setState({
            incomeConcepts: res.data,
            incomeConceptSelected: res.data[0].concept
        })
    }

    handleDate = (date) => {
        this.setState({
            incomeDate: date
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name+'> '+e.target.value);
    }

    onDateChange = (date) => {
        this.setState({
            incomeDate: date,
        })
    }
    
    onSubmit = async (e) => {
        e.preventDefault();
     
        const newIncome = {
            userID: this.state.userID,
            incomeConcept: this.state.incomeConceptSelected,
            income: this.state.income.replace(/[$,]/g,''),
            date: this.state.incomeDate,
            incomeType: this.state.incomeType
        }

        const res = await axios.post('http://localhost:4000/api/incomes/createIncome', newIncome);
        if(res.data.success){
            document.getElementById("create-income-form").reset();
            this.setState({ 
                incomeDate: new Date(),
                incomeCreated: '',
                income: ''
            });
        } else {
            this.setState({ 
                incomeError: ''
            });
        }
    }

    render() {
        return (
            <div className={this.props.hideAddIncomes}>
                <div className="card text-center card-Incomes  shadow">
                    <div className="card-header">
                        Add Incomes
                    </div>
                    <div className="card-body">
                        <div className="content-form-addIncomes">
                            <div className="row">
                                <div className="col">
                                    <div className={"alert alert-success "+ this.state.incomeCreated} id="success-alert">
                                        <button type="button" className="close" data-dismiss="alert">x</button>
                                        <strong>Success! </strong> Income Created
                                    </div>
                                    <div className={"alert alert-danger "+ this.state.incomeError} id="error-alert">
                                        <button type="button" className="close" data-dismiss="alert">x</button>
                                        <strong>Something was wrong </strong>
                                    </div>
                                    <form id="create-income-form" onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <Datepicker
                                                className="form-control"
                                                dateFormat='dd-MM-yyyy'
                                                selected={this.state.incomeDate}
                                                onChange={this.handleDate}
                                            >
                                            </Datepicker> 
                                        </div>
                                        {/** Income Concept */}
                                        <div className="form-group">
                                            <select
                                                className="form-control"
                                                name="incomeConceptSelected"
                                                onChange={this.onInputChange}
                                                value={this.state.incomeConceptSelected}>
                                                {
                                                    this.state.incomeConcepts.map(concept =>
                                                        <option
                                                            className=""
                                                            key={concept._id}
                                                            value={concept.concept}>
                                                            {concept.concept}
                                                        </option>)
                                                }
                                            </select>  
                                        
                                        </div>                                        
                                        {/** Income */}
                                        <div className="form-group">
                                            <CurrencyFormat 
                                                thousandSeparator={true} 
                                                prefix={'$'}
                                                className="form-control"
                                                placeholder="Cost"
                                                name="income"
                                                value={this.state.income}
                                                onChange={this.onInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="radio" name="incomeType" value="Occasional" checked={this.state.incomeType === 'Occasional'} onChange={this.onInputChange}></input>
                                            <label> Occasional</label>
                                            <input type="radio" name="incomeType" value="Monthly" checked={this.state.incomeType === 'Monthly'} onChange={this.onInputChange}></input>
                                            <label> Monthly</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Add Income
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
