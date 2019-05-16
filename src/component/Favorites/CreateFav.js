import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//import Cookies from 'universal-cookie';
//import ShowUser from './component/ShowUser/ShowUser'

//const cookies = new Cookies();

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
//console.log(this.props.username)
        //console.log(cookies.get('myFavorites'));
        return(
            <div>
      
              {this.state.user.username} Favorite Comics:
          
            </div>
        )
    }
}



 export default CreateFavorite;