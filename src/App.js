import React, { Component} from 'react';
import './App.css' 

import Login from './components/login/Login';
 import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
 import Newsfeed from './components/login/Newsfeed';
 import FounderDetails from './components/FounderDetails';
 import Logout from './components/login/Logout';
 import FormIssuerDetails from './components/FormIssuerDetails';




class App extends Component {

  render(){
  return (
    
    //Routing all the components 
    <div className="App">
     
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
      <Route exact path="/" component={Login}/>
      <Route path ="/formissuerdetails" component= {FormIssuerDetails}/>
      <Route path="/founderdetails" component={FounderDetails}/>
      <Route path="/newsfeed" component={Newsfeed}/>
      <Route path='/logout' component={Logout} />
      </Switch>
      </Router>
      
    
    </div> 
    
  );
}}

export default App;
