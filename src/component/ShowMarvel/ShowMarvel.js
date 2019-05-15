import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import MarvelList from '../MarvelList/MarvelList'
import SearchName from '../SearchBar/SearchBar'


class ShowMarvel extends Component {
  constructor(){
      super();
      this.state = {
          results: [],
          character:"",
          comics:[],
      
    }
  }

//   componentDidMount() {
//     this.getCharacters();
//     console.log(this.state.data.results)
//   }
//    getCharacters = async () => {
//        try {
//            const response = await fetch ('https://gateway.marvel.com:443/v1/public/characters?limit=10&?ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9', {
//                credentails: 'include'
//            });
//         if(response.status !== 200) {
//             throw Error (response.statusText);
//         }
//     const charactersParsed = await response.json();
//     this.setState({characters:charactersParsed.data.results});
//     console.log(this.state.charactersParsed.data)
//    }catch (err){
//        console.log(err);
//    }
// }
//    <SearchName getCharacter={this.state.getCharacter}/>

  // getCharacter = async(id, name)=>{
  //   try{
  //       console.log('id', id)
  //       const character = await fetch(`/api/v1/${id}`);
  //       const parsedChar = await character.json();
  //       console.log('parsedChar', parsedChar)
  //       if (parsedChar.success){
  //         console.log('success')  
  //         this.setState({
  //               results:parsedChar,
  //               showCharacter: true,
  //               character: name,
  //               comics: parsedChar.comics
  //           })
  //       }console.log(this.state.results,'=====char')

  //   }catch(err){
  //     console.log('get character');
      
  //       console.log(err)
  //   }

  // }

  render(){
    console.log(this.props)
      return (
      <div>
        <div>
          <SearchName getCharacter={this.props.search} />
          <MarvelList characters={this.props.characters}/>
         </div>
      </div>)

  }
}

///  <Card style = {{width: '18rem'}}>
{/* <Card.Img variant = "top" src = "MarvelList.js/100px180"/>
<Card.Body>
  <Card.Title>{c.title}</Card.Title>
  <Card.Text>
      <MarvelList characters={this.props.characters}/>
  </Card.Text>
<Button variant = "view">View</Button>
</Card.Body>
</Card> */}

export default withRouter(ShowMarvel)