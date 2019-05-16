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


    // <div>
    // <label htmlfor="username">Username</label>
    // <input type="text" name="username" value={username} onChange={this.changeHandler} />
    // <label htmlfor="password">Password</label>
    // <input type="password" name="password" value={password} onChange={this.changeHandler} />
    // <button type='submit'>Submit</button>
    // </div>

    render() {
        console.log(this.state.logged)
      const { username, password } = this.state
      return (
        this.state.logged
        ? <Redirect to={`/users/${this.props.currentUser._id}`} />
        : <form onSubmit={e => this.onSubmit(e)}>
        <div class = "container">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="username" name = "username" placeholder="Username" value={username} onChange = {this.changeHandler}/>
                        <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" name = "password" placeholder="Password" value = {username} onChange = {this.changeHandler}/>
                         <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button  type = "submit" class="button is-success">Login</button>
                </p>
            </div>
        </div>
           
          </form>
      )
    }
}

export default Login