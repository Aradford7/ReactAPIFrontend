import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//import Cookies from 'universal-cookie';


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

    //console.log(this.state.user,"user/////")
    //cookies.set('myFavorites', this.state.user, { path: '/' });
    return (
      <div>
        <h1>{this.state.user.username}</h1>
        <h1>{this.state.user.password}</h1>
      </div>
    )
  }
}

export default withRouter(ShowUser)