import React, {Component} from 'react'

class SearchName extends Component{
    state = {
        char: 'spider-man'
    }
    handleSubmit = (e) => {
        this.props.search(this.state.char)
    }
}