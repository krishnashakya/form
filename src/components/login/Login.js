import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


//Login Component
export class Login extends Component {
    constructor(props)
    {
        super(props)
    this.state=
    {
        username:'',
        password:'',
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
}

    onChange(e)     //Setting the value entered from the form 
        {
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        submitForm(e)            //Validation of the user input and routing to another component with onClick event
        {
             e.preventDefault()
             //debugger;
            const { username, password } = this.state
            if(username === "admin" && password === "admin")
            {

               localStorage.setItem("token", process.env.TOKEN_SECRET)
            this.props.history.push('/newsfeed');                       //redirecting to newsfeed component 
            }
            else{
                localStorage.setItem("token", "")
                this.props.history.push('/login');
                alert("Username or password didn't match");
            }   
            
        }

    
    render() {  
        
        return (
            
            <MuiThemeProvider> 

                <React.Fragment>
            <AppBar title="Login"></AppBar>                 
            <form>
            <TextField                                          //Username field with the use of material-ui
                    hintText = "Enter Your Username"
                    floatingLabelText = "Username"
                    name= "username"
                    value={this.state.username}
                    onChange = {this.onChange}
                    />
                    <br/>

                    <TextField                                   //password field with the use of material-ui
                    type="password"
                    hintText = "Enter your password"
                    floatingLabelText = "Password"
                    name= "password"
                    value={this.state.password}
                    onChange = {this.onChange}
                    />
                    <br/>
                    
                    <RaisedButton                                //Button with the use of material-ui
                    label = "submit"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.submitForm}
                    />
                    <br/>
                    </form> 
                    </React.Fragment>

           </MuiThemeProvider>

        )
    }
}
const styles = {                                    //Styling the button 
    button: {
        margin: 15
    }
}

export default Login

