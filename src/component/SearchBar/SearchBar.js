import React, {Component} from 'react'

class SearchName extends Component{
    state = {
        char: 'spider-man'
    }
    handleSubmit = (e) => {
        this.props.search(this.state.char)
    }
    handleChange = (e) => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
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