import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './ShowCharacter.css'

class ShowCharacter extends Component {

    state = {
        comics: []
    }

    componentDidMount() {
        this.getCharacter()
    }

    getCharacter = async()=>{
        try{
            const character = await fetch(`/api/v1/character/${this.props.match.params.id}`);
            const parsedChar = await character.json();
            console.log(parsedChar)
            if (parsedChar.success){
                this.setState({
                    comics: parsedChar.comics
                })
            }

        }catch(err){
            console.log(err)
        }

    }

    // addCharacter = async comic => {
    //     const comicObj = {
    //         title: comic.title,
    //         id: comic.id
            
    //     }
    //     const addedCharacter = await fetch(`/users/${this.props.currentUser._id}/comic`, {
    //         method: 'POST',
    //         credentials: 'include',
    //         body: JSON.stringify(comicObj),
    //         headers:{
    //             "Content-Type" : 'application/json'
    //         }
    //     });

    //     const addedCharacterJson = await addedCharacter.json()
    //     console.log(addedCharacterJson)
    // }

    render() {
        return (
            <div class = "has-text-danger">
                {
                    this.state.comics.map((c,i) => 
                        <div key={i}>
                            <p>{c.title} {this.props.currentUser && <button onClick={() => this.props.addCharacter(c)}>ADD</button>}</p>
                            
                            {(c.images.length > 0)
                                && c.images.map(i =>
                                    <img key={i.path} style={{'maxWidth': '100px', 'marginLeft': '15px'}}src={`${i.path}.${i.extension}`} />
                                )
                            }
                        </div>
                    )
                }
                {
                    (this.state.comics.length === 0) && <div>Sorry No Comics :(</div>
                }
            </div>
        )
    }
}

export default withRouter(ShowCharacter)