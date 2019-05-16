import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//import ShowUser from './component/ShowUser/ShowUser'
class CreateFavorite extends Component{
    constructor(){
        super();

        this.state = {
            user:{},
            results:[{
                id: Number,
                name: String,
                description: String,
                resourceURI: String,
                thumbnail: {
                path: String,
                extension: String}}],
        }
    }
    updateFavorite = (e) => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
    }
    render(){

        return(
            <div>
              
              {this.props.currentUser} 's Favorite Comics:
          
            </div>
        )
    }
}



 export default CreateFavorite;