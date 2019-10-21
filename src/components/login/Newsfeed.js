import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './Display.css'
import Display from './Display';







export class Newsfeed extends Component {
   
    constructor(props){
        super(props)

        // get the set token from login.js
       const token = localStorage.getItem("token")
       
       if(!token)
       {
           return this.props.history.push('/login');
       }
       this.redirectIssue = this.redirectIssue.bind(this);
       this.redirectFounder = this.redirectFounder.bind(this);
       this.redirectLogout = this.redirectLogout.bind(this);
    }

    redirectIssue()
    {
        return this.props.history.push('/formissuerdetails');
    }

    redirectFounder()
    {
        return this.props.history.push('/founderdetails');
    }

    redirectLogout()
    {
        return this.props.history.push('/logout');
    }
    


    render() {
        
        return (
            
            <div className="parent">
                
                <MuiThemeProvider>
                <AppBar title="NEWSFEED">
                <RaisedButton                                //Button with the use of material-ui
                    label = "Issueform"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.redirectIssue}
                    />
                     <RaisedButton                                //Button with the use of material-ui
                    label = "FounderDetails"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.redirectFounder}
                    />
                     <RaisedButton                                //Button with the use of material-ui
                    label = "Logout"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.redirectLogout}
                    />
                    </AppBar>

                
                    <Display/>
                
                </MuiThemeProvider>

            </div>
        )
    }
}
const styles = {                                    //Styling the button 
    button: {
        margin: 15
        
    }
}

export default Newsfeed
