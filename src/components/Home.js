import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: '',
            userName: '',
            userEmail: ''
        }
    }

    async componentDidMount(){
        const userSession = await axios.get('http://localhost:4000/api/home');
        if(userSession.data.success) {
            // if no user session redirect to home
            // get user Data
            const userData = await axios.get('http://localhost:4000/api/users/'+userSession.data.userID);
            console.log(userData);
            this.setState({
                userID: userData.data._id,
                userName: userData.data.name,
                userEmail: userData.data.email
            })
        } else {
            // else redirect to login
            window.location.replace("http://localhost:3000/login");

        }


    }


    render() {
        return (
            <div>
                <Navigation />
                <h1>Welcome! : {this.state.userName} email: {this.state.userEmail}</h1>
            </div>
        )
    }
}
