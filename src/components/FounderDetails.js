import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';


export class FounderDetails extends Component {
    constructor(props)
    {
        super(props)
    this.state={
            founderName:'',
            foundLocation:'',
            founderContact:'',
            founderEmail:'' ,
            urlImage:"",
            imageMulter:""
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
}

    onChange(e)
        {
            this.setState({
                [e.target.name]:e.target.value
            })
        }



        foundImage = (e)=>{
            //  this.setState({
            //      isUploading:true
            //  })
            let file = e.target.files[0];
            let formObj = new FormData();
            

            formObj.append("photo", file);
           console.log(formObj);
            this.setState({
                imageMulter: URL.createObjectURL(file)
                
            });     
            // debugger;
            
            axios({
                method: 'post',
                url: 'http://localhost:5000/image/uploadmulter',
                data: formObj,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            
                .then( (response)=> {
                    // debugger
                    //handle success
                    // this.setState({
                    //     isUploading: false
                    // })
                    this.setState({
                        urlImage :response.data.url
                    })
                    console.log(response,"success");
                })
                .catch((response)=> {
                    //handle error
                    // this.setState({
                    //     isUploading: false
                    // })
                    // debugger;
                    console.log(response,"error");
                });
            
      }
    
    submitForm(e){
                     e.preventDefault();
                     const values = {
                     founderName: this.state.founderName,
                     foundLocation: this.state.foundLocation,
                     founderContact: this.state.founderContact,
                     founderEmail: this.state.founderEmail,
                     urlImage: this.state.urlImage

                    }
                    console.log(values);

                    axios.post('http://localhost:5000/api/user/founder',values)
                    .then(response => {
                    console.log(response);
                    console.log("Founder's Details have been added to the directory");
                    })
                    .catch(err => {
                    console.log(err);
                    })
                    
                    return this.props.history.push('/newsfeed');
      
                 }

        back = () => {
            return this.props.history.push('/newsfeed');
        }


    

      
    render() {
        
        return (
            
            <MuiThemeProvider> 

                <React.Fragment>
            <AppBar title="Founder Details"></AppBar>
            <form>
            <TextField 
                    hintText = "Enter Your Name"
                    floatingLabelText = "Founder's Name"
                    name= "founderName"
                    value={this.state.founderName}
                    onChange = {this.onChange}
                    />
                    <br/>

                    <TextField 
                    
                    hintText = "Last seen at"
                    floatingLabelText = "Location"
                    name= "foundLocation"
                    value={this.state.foundLocation}
                    onChange = {this.onChange}
                    />
                    <br/>

                    <TextField 
                    
                    hintText = "Enter Your phone number"
                    floatingLabelText = "Contact"
                    name= "founderContact"
                    value={this.state.founderContact}
                    onChange = {this.onChange}
                    />
                    <br/>

                    <TextField 
                    
                    hintText = "Enter Your Email Address"
                    floatingLabelText = "Email Address"
                    name= "founderEmail"
                    value={this.state.founderEmail}
                    onChange = {this.onChange}
                    />
                    <br/>
                    <br/>
                    <br/>
                    
                    <div>

                    <input label="Choose File"  name= "img" type="file" 
                    className="process_upload-btn"  onChange={(e) => this.foundImage(e)}/>
                    
                    </div>
                    
                    <RaisedButton
                    label = "submit"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.submitForm}
                    />
                    <RaisedButton
                    label = "Back"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.back}
                    />
                    
                    </form> 
                    </React.Fragment>

           </MuiThemeProvider>

        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default FounderDetails

