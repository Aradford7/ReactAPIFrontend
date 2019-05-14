import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import MarvelList from '../MarvelList/MarvelList'


class ShowMarvel extends Component {
  constructor(){
      super();
      this.state = {
          results: [],
      
    }
  }

  componentDidMount() {
    this.getCharacters();
    console.log(this.state.data.results)
  }
   getCharacters = async () => {
       try {
           const response = await fetch ('https://gateway.marvel.com:443/v1/public/characters?limit=10&?ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9', {
               credentails: 'include'
           });
        if(response.status !== 200) {
            throw Error (response.statusText);
        }
    const charactersParsed = await response.json();
    this.setState({characters:charactersParsed.data.results});
    console.log(this.state.charactersParsed.data)
   }catch (err){
       console.log(err);
   }
}
  render(
    
  ){
      return (
      <div>
        <div><MarvelList characters={this.state.characters}/> </div>
      </div>)

  }
}



export default withRouter(ShowMarvel)