import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class Register extends Component {
    state = {
        username: '',
        password: '',
        logged:false,
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    onSubmit = async (e) => {
        e.preventDefault();
        const registerResponse = await fetch('/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers:{
                "Content-Type" : 'application/json'
            }
        })

        console.log(registerResponse)
        const parsedResponse = await registerResponse.json();
        if(parsedResponse.user) {
          this.props.doSetCurrentUser(parsedResponse.user)
            this.setState({
                logged: true,
            })
        }
    }
    render(){
        const {username, password} = this.state
        console.log(this.state)
        return(
            <div class ="container" style={{'Width': '50px', 'marginLeft': 'center'}}>
                {
                    this.state.logged
                    ?<Redirect to={`/users/${this.props.currentUser._id}`}/>
                    :<RegisterForm 
                        changeHandler={this.changeHandler}
                        onSubmit = {this.onSubmit}
                        username={username}
                        password={password}
                    />
                }
            </div>

        )
    }
}

const RegisterForm = ({changeHandler, onSubmit, username, password}) =>
    <form onSubmit = {e => onSubmit(e)}>
        <div class = "container">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input onChange = {e => changeHandler(e)} type = "username" name = "username" value = {username} class="input"  placeholder="Username"/>
                        <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
                        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input onChange = {e => changeHandler(e)} type = "password" name = "password"  value = {password} class="input" placeholder="Password"/>
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





export default Register

{/* <label htmlfor="username">Username</label>
<input onChange = {e => changeHandler(e)}type = "text" name = "username" value = {username}/>
<label htmlfor="password">Password</label>
<input onChange = {e => changeHandler(e)} type = "password" name = "password"  value = {password}/>
<button type = 'submit'>SUBMIT</button> */}