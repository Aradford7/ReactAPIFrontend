// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'

// class ShowFavorites extends Component {
//     constructor(){
//         super();

//         this.state = {
//             comics: [],
//             comicToAdd:{ 
//                 results:[{
//                     id: Number,
//                     name: String,
//                     description: String,
//                     resourceURI: String,
//                     thumbnail: {
//                         path: String,
//                         extension: String}}],

//             }, 
//             modalShowing: false
//         }
//     }
//     componentDidMount(){
//         this.getComics();
//     }
// getComics = async() => {
//         try{
//             const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${req.params.id}&ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`,{
//             credentials:'include'
//         });
//       if (response.status !== 200)  {
//           throw Error(response.statusText)
//       }
//       const comicsParsed = await response.json();
//       this.setState({comics:comicsParsed.data});
//     }catch (err){
//         console.log(err);
//     }}
// }

// addComic =  async (comic, e) =>{
//     e.preventDefault();
//     console.log(comic)
//     try {
//         const createdFavorite = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${req.params.id}&ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`, {
//             method: 'POST',
//             credentials: 'include',
//             body:JSON.stringify(movie),
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         });
//         this.setState({comics: [...this.state.comics, parsedResponse.data]})
//     }catch(err){
//         console.log(err)
//     }
// }

// deleteComic = async (id, e) => {
//     console.log(id, 'this is id')
//     e.preventDefault();
// try {
//     const deleteComic = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${req.params.id}&ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9` + {id}, {
//         method:'DELETE',
//         credentials: 'include'
//     });
//     const deleteComicJson = await deleteComic.json();
//     this.setState({comics:this.state.comics.filter((comic, i) => comic._id !==id)})
// }catch(err){
//     console.log(err, 'error')
//     }
// }
// render(){
//     console.log(this.state, "<=== comic state object" )
//     return(
//         <div>

//         </div>
//     )
// }
    




// export default ShowFavorite;