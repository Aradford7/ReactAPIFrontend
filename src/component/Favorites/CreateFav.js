import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//import ShowUser from './component/ShowUser/ShowUser'
class CreateFavorite extends Component{
    constructor(){
        super();
    }
    updateFavorites = (e) => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
    }

    render(){
console.log(this.props.favorite)
        return(
            <div>
              
              Favorite Comics:
            {this.props.currentUser.favorite.map((f, i)=>{
                return (
                    <h1>{f.title}</h1>

                )
            })}
            </div>
        )
    }
}



 export default CreateFavorite;