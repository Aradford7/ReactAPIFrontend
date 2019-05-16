import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
//import { NavLink } from 'react-router-dom'
//import * as routes from './constants/routes'
//const cookies = new Cookies();

class ShowUser extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.doGetUser()
      .then(({user}) => this.setState({user}))
  }

  doGetUser = async () => {
    try {
      const user = await fetch(`/users/${this.props.match.params.id}`)
      const parsedUser = await user.json()
      return parsedUser 
    } catch(err) {
      console.log(err)
    }
  }
  render() {
    // console.log(this.state.user,"user/////");
    // cookies.set('myFavorite', JSON.stringify(this.state.user), { path: '/' });
    //console.log(cookies.get('myFavorite'));
    return (
      <div>
        <h1>Welcome Back {this.state.user.username}!</h1>
        {/* <NavLink exact to={routes.ROOT}>
            <button type="button">
                     Browse Comics!
            </button>
        </NavLink> */}
        
        
      </div>
    )
  }
}

export default withRouter(ShowUser)