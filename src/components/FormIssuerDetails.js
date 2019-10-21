import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export class FormIssuerDetails extends Component {


    constructor(props){
        super(props)
        this.state={
            nameoftheDog:"",
            age:"",
            location:"",
            description:"",
            multerImage:"",
            imageUrl:"",
            // isUploading: ''
    
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount(){
    //     if(this.props.dog){
    //         this.setState({nameoftheDog:this.props.dog.nameoftheDog})
    //     }
    // }
    

    uploadImage = (e)=>{
        //  this.setState({
        //      isUploading:true
        //  })
        let file = e.target.files[0];
        let imageFormObj = new FormData();
        

   
        imageFormObj.append("photo", file);
       console.log(imageFormObj);
        this.setState({
            multerImage: URL.createObjectURL(file)
            
        });     
        
        axios({
            method: 'post',
            url: 'http://localhost:5000/image/uploadmulter',
            data: imageFormObj,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        
            .then( (response)=> {
                //handle success
                // this.setState({
                //     isUploading: false
                // })
                this.setState({
                    imageUrl:response.data.url
                })
                console.log(response,"success");
            })
            .catch((response)=> {
                //handle error
                // this.setState({
                //     isUploading: false
                // })
                console.log(response,"error");
            });
        
  }

    back = () => {
        return this.props.history.push('/newsfeed');
    }


      
    handleChange(e){
          e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
     }
    
    submitForm=(e)=>{
      e.preventDefault();
      const values = {
          nameoftheDog: this.state.nameoftheDog,
          age: this.state.age,
          location: this.state.location,
          description: this.state.description,
          imageUrl : this.state.imageUrl
          
          
    }
        console.log(values);
        axios.post('http://localhost:5000/api/user/issueadded',values)
            .then(response => {
                console.log(response);
                console.log("user succesfully added");
            })
            .catch(err => {
                console.log(err);
            })

            return this.props.history.push('/newsfeed');
      }
      

      
      
    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Dog Details" />
                    <TextField 
                    hintText = "Enter Dog's Name"
                    floatingLabelText = "Name of the Dog"
                    name="nameoftheDog"
                    value={this.state.nameoftheDog}
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <TextField 
                    hintText = "Enter Dog's Age"
                    floatingLabelText = "Age of the Dog"
                    name="age"
                    value={this.state.age}
                    onChange = {this.handleChange}
                    
                    />
                    <br/>
                    <TextField 
                    hintText = "Enter Location lost from"
                    floatingLabelText = "Location lost from"
                    name="location"
                    value = {this.state.location}
                    onChange = {this.handleChange}
                    
                    />
                    <br/>

                    <TextField 
                    hintText = "Description"
                    floatingLabelText = "Description about the Dog"
                    name="description"
                    value = {this.state.description}
                    onChange = {this.handleChange}
                    
                    />
                    <br/>
                    <br/>
                    
                    <div>

                    <input label="Choose File"  name= "img" type="file" 
                    className="process_upload-btn"  onChange={(e) => this.uploadImage(e)}/>
                    
                    </div>


                    <RaisedButton
                    label = "Continue"
                    primary = {true}
                    disabled={this.state.isUploading}
                    style = {styles.button}
                    onClick = {this.submitForm}
                    />

                    <RaisedButton
                    label = "back"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.back}
                    />
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

export default FormIssuerDetails
