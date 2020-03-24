import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <div className="container p-4">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register/" exact component={Register} />
      </div>
    </Router>
  );
}

export default App;
