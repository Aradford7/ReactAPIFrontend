import React, {Component} from 'react'

class SearchName extends Component{
    state = {
        char: 'spider-man',
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
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' name = 'char' value = {char} onChange = {this.handleChange}/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default SearchName