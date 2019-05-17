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


  render(){
    console.log(this.props)
      return (
      <div>
        <div class ="container">
            <SearchName getCharacter={this.props.search} />
        <div>
            <MarvelList characters={this.props.characters}/>
        </div>
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
                is licensed by Marvel<a href="https://developer.marvel.com/"> Disclaimer: No Advertising/Sponsership Marvel Please dont sue me
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