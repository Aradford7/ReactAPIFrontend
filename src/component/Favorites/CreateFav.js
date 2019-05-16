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
//     deleteFavorites = (e) => {
//         console.log(this.props.currentUser.favorite.f.title,'this is the title"')
//         e.preventDefault();
//         try{
//             const deleteFavorites = await fetch(`/api/v1/character/${this.props.match.params.id}`,{
//             method: 'DELETE'
//         });
//         console.log('inside try to delete works')
//         const deleteFavoritesJson = await deleteFavorites.Json();
//         this.setState({favorite:this.state.movies.filter((f, i) => f.id)})
//     }catch(errr){
//         console.log(err)
//     }
// }
    render(){
console.log(this.props.favorite)
        return(
        <div class = "container">  

        Favorite Comics:
            {this.props.currentUser.favorite.map((f, i)=>{
            return (
                <div class = "container">
                    <h1>{f.title}</h1>
                </div>

            )
        })}
        </div>
              
      
            
        
        )
    }
}



 export default CreateFavorite;


 //  <div>
//  {
//     this.state.favorite.map((f,i) => 
//         <div key={i}>
//             <p>{f.title} {this.props.currentUser && <button onClick={() => this.props.deleteFavorites(f)}>DELETE</button>}</p>
            
//             {(f.images.length > 0)
//                 && f.images.map(f =>
//                     <img key={f.path} style={{'maxWidth': '100px', 'marginLeft': '15px'}}src={`${f.path}.${f.extension}`} />
//                 )
//             }
//         </div>
//     )
// }

// </div>