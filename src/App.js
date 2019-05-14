import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import ShowMarvel from './component/ShowMarvel/ShowMarvel'

import * as routes from './constants/routes'
import './App.css';

class App extends Component {
  state = {
    currentUser: null,
    char: []
  }

  doSetCurrentUser = user =>
    this.setState({
      currentUser: user,
    })

  async componentDidMount() {
    const people = await fetch('/api/v1/iron_man')
    const jsonPeople = await people.json()
    this.setState({char: jsonPeople.char})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={(props) => <ShowMarvel props={props} characters={this.state.char}/>} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}



export default App;
