import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

export class Display extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            
            dogs: [],
            founded:[],
            open: false
        }
        this.handleClickOpen= this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

            // To delete the issue details
              deleteData = (id) => {
                axios.delete('http://localhost:5000/api/user/issue/'+id)
                .then(()=>{
                    this.setState({
                        dogs: this.state.dogs.filter(el => el._id !== id)
                    })
                })
               
                .catch(err => console.log(err))
            }

            // To delete the found details
            deleteData = (id) => {
                axios.delete('http://localhost:5000/api/user/founder/'+id)
                .then(()=>{
                    this.setState({
                        founded: this.state.founded.filter(el => el._id !== id)
                    })
                })
               
                .catch(err => console.log(err))
            }

            // updateData =(id) => {
            //     axios.patch('http://localhost:5000/api/user/update/'+id)
            //         .then(() => {


            //             })
            //         }
            
   


    

    //fetching data from api
    async componentDidMount()
    {
        const token = localStorage.getItem("token")
        if(token){
        // const url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=12";
        // const response =  await fetch (url);
        // const data = await response.json();
        // console.log(data);
        // this.setState({dogs: data}); 

        const url = "http://localhost:5000/api/user/register";
        const response = await fetch (url);
        const data = await response.json();
        console.log(data);
        this.setState({dogs: data});
        } 
        else{
            return <h1>Your token expired</h1>
        }
        if(token){

        const url = "http://localhost:5000/api/user/found";
        const response = await fetch (url);
        const foundData = await response.json();
        console.log(foundData);
        this.setState({founded: foundData});
        } 
        else{
            return <h1>Your token expired</h1>
        }

    }

    handleClickOpen = () => {
        // debugger;
        // axios.patch('http://localhost:5000/api/user/update/'+id)
        //             .then(response => {
        //             console.log(response);
        //             console.log("Form data is now changed");
        //             })
        //             .catch(err => {
        //             console.log(err);
        //             })
                    this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open:false});
      };
    

    

        //Displaying the data received from api
        DogDisplay = (e) => {
        // return this.state.dogs.map(dog => {

        // return (
        //     <div className="card">
        //          <img src= {dog.url} alt=""/><br/>
        //         <h2>Name:</h2><h3>{dog.breeds[0].name}</h3><br/>
        //         <h2>Description:</h2><h4>{dog.breeds[0].temperament}</h4>
        //     </div>
        //    )});  



        return this.state.dogs.map(dog => {

        return (
            <div className="card">
                 
        
                    <img src= {dog.imageUrl} alt=""/><br/>
                    <h5>#lost</h5>
                    <RaisedButton
                    label="Delete"
                    primary = {true}
                    style = {styles.button}
                    onClick = {()=>this.deleteData(dog._id)}
                    />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                   
                    <RaisedButton
                    label="edit"
                    primary = {true}
                    style = {styles.button}
                    onClick={this.handleClickOpen.bind(this)}
                    />

                        {/* Dialog box to update the user input data  */}
                        <Dialog open={this.state.open} >
                            <h1> This is a dialog box</h1>
                            <div className='dogInformation'>
                                <RaisedButton
                                label = "X"
                                primary = {true}
                                onClick={this.handleClose.bind(this)}
                                />
                                &nbsp; &nbsp; &nbsp;
                                 <RaisedButton
                        label = "Update"
                        primary = {true}
                        onClick={this.handleClose.bind(this)}
                        />
                         <div className="dogTitle">
                            {/* {console.log(dog,"dog")} */}
                             <p>Dog's Name : </p> <TextField></TextField><p>{dog.nameoftheDog}</p>   
                         </div>
                            <div className="dogAge">
                            <p>Age : </p> <TextField></TextField><p>{dog.age}</p>
                          </div>
                            <div className="dogLocation">
                                <p>Location : </p> <TextField></TextField> <p>{dog.location}</p>
                                
                             </div>
                        <div className="dogDesc">
                        <p>Description : </p> <TextField></TextField><p>{dog.description}</p>
                        
                       
                    </div>
                    
                </div>
                        </Dialog>


                <div className='dogInformation'>
                    <div className="dogTitle">
                        {/* {console.log(dog,"dog")} */}
                        <p>Dog's Name : </p><p> {dog.nameoftheDog}</p>    
                    </div>
                    <div className="dogAge">
                        <p>Age : </p><p> {dog.age}</p>    
                    </div>
                    <div className="dogLocation">
                        <p>Location : </p><p> {dog.location}</p>    
                    </div>
                    <div className="dogDesc">
                        <p>Description : </p><p> {dog.description}</p>    
                    </div>
                    
                </div>
                
            </div>
           )});
        }


        foundDog = (e) => {

            return this.state.founded.map(dog => {
    
            return (
                <div className="card">
                     
            
                        <img src= {dog.urlImage} alt=""/><br/>
                        <h5>#found</h5>
                        <RaisedButton
                        label="Delete"
                        primary = {true}
                        style = {styles.button}
                        onClick = {()=>this.deleteData(dog._id)}
                        />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; 
                        <RaisedButton
                        label="Edit"
                        primary = {true}
                        style = {styles.button}
                        // onClick = {this.updateData}
                        />
                    <div className='dogInformation'>
                        <div className="dogTitle">
                            <p>Founder's Name : </p><p> {dog.founderName}</p>    
                        </div>
                        <div className="dogAge">
                            <p>Founded Location : </p><p> {dog.foundLocation}</p>    
                        </div>
                        <div className="dogLocation">
                            <p>Contact : </p><p> {dog.founderContact}</p>    
                        </div>
                        <div className="dogDesc">
                            <p>Email : </p><p> {dog.founderEmail}</p>    
                        </div>
                        
                    </div>
                    
                </div>
               )
            });
            }


    
    

         render() {

            return (
            <div className="display">
                {this.DogDisplay()}
                {this.foundDog()}
                
            </div>
            )
              }
}
                const styles = {
                button: {
                margin: 0

                }
                }

export default Display
