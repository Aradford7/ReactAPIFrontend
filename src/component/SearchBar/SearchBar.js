import React, {Component} from 'react'
import './SearchBar.css'

class SearchName extends Component{
    state = {
        char: '',
        search:''
        
    }
    handleChange = (e) => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getCharacter(this.state.char)
        //console.log(char)
    }
    render(){
        const {char} = this.state
        return(
            <div className = "searchContainer" class ="columns ">
                <div class = "column is-half is-center">
                <div class = "field">
                <div class = "control">
                <form onSubmit = {this.handleSubmit}>
                    <input class = "input is-rounded is-large" type = 'text' name = 'char' placeholder ="Search" value = {char} onChange = {this.handleChange}/>
                    <button type = "submit">SEARCH</button>
                </form>
                </div>
                </div>
                </div>
            </div>
        )
    }

}

export default SearchName