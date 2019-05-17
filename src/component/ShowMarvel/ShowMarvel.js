import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import MarvelList from '../MarvelList/MarvelList'
import SearchName from '../SearchBar/SearchBar'
import './ShowMarvel.css'

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

         <div id = "page-container">
         <div id = "content-wrap">
         <footer class="footer">
            <div class="content has-text-centered">
              <p>
                <strong>Marvel API Comic Search </strong> 
                <a href="https://jgthms.com">by AshR</a>  Made with React/Express/MongoDB.  View code here
                <a href="">  Github Link</a>.
                The website API content
                is licensed by Marvel<a href="https://developer.marvel.com/"> Disclaimer: Marvel Please dont sue me
                </a>.
              </p>
            </div>
          </footer>
          </div>
      </div>
  </div>

      
      )

  }
}



export default withRouter(ShowMarvel)