import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Logout extends Component {
    constructor(props)
    {
        super(props)
        localStorage.setItem("token","")

        this.redirect = this.redirect.bind(this);
    }
    redirect()
    {
        return this.props.history.push('/login');
    }

    render() {
        
        return (
            
            <div className="logout">
                <MuiThemeProvider>
                    <AppBar title="Logout"></AppBar>
                    <h1>Login to get access in the page</h1>
                    <RaisedButton                                //Button with the use of material-ui
                    label = "Login"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.redirect}
                    />
    
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

export default Logout
