import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        password: '',
        logged: false
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch('/users/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers:{
                "Content-Type" : 'application/json'
            }
        })

        const parsedResponse = await loginResponse.json();
        if(parsedResponse.success) {
          this.props.doSetCurrentUser(parsedResponse.user)
            this.setState({
                logged: true,
            })
        }else{
            this.setState({
                message: "try again"
            })
        }
    }

    render() {
        console.log(this.state.logged)
      const { username, password } = this.state
      return (
        this.state.logged
        ? <Redirect to={`/users/${this.props.currentUser._id}`} />
        : <form onSubmit={e => this.onSubmit(e)}>
            <input type="text" name="username" value={username} onChange={this.changeHandler} />
            <input type="password" name="password" value={password} onChange={this.changeHandler} />
            <button type='submit'>Submit</button>
          </form>
      )
    }
}

export default Login