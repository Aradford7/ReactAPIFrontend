import React from 'react';
//import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
class MarvelList extends React.Component {
  
    state={
        showCharacter: false,
        character:"",
        comics:[]
    }

    getCharacter = async(id, name)=>{
        try{
            const character = await fetch(`/api/v1/character/${id}`);
            const parsedChar = await character.json();
            if (parsedChar.success){
                this.setState({
                    showCharacter: true,
                    character: name,
                    comics: parsedChar.comics
                })
            }

        }catch(err){
            console.log(err)
        }

    }

    imageHandler = (obj) =>{
        const pic = obj.path + "." + obj.extension
        return (pic)
    }
    
    

    render(){
        return(
           <div>
               {this.state.showCharacter
               ?
               (    
                    this.state.comics.map((c, i)=>{
                        return(
                            <div>
                                <h1>{c.title}</h1>
                                <img src={this.imageHandler(c.images[0])}/>
                                <button>Add</button>
                            </div>
                        )
                    })
               )
               :(
                   <div>
                        {this.props.characters.map((c, i) => {
                                return (
                                    <div key={i} onClick={()=>{this.getCharacter(c.id)}}>{c.name}</div>
                                )       
                        })}
                    </div>
               )
            }
           </div>
        )
    }
}
export default MarvelList