import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//import ShowUser from './component/ShowUser/ShowUser'
class CreateFavorite extends Component{
    constructor(){
        super();

        this.state = {
            user:{},
            comic:[{
                id: Number,
                name: String,
                description: String,
                resourceURI: String,
                thumbnail: {
                path: String,
                extension: String}}],
        }
    }
    updateFavorites = (e) => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
    }

    render(){
console.log(this.props.favorite)
        return(
            <div>
              
              Favorite Comics:
            {this.state.user.favorite}
            </div>
        )
    }
}



 export default CreateFavorite;