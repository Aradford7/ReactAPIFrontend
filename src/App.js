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
    currentUser: null
  }

  doSetCurrentUser = user =>
    this.setState({
      currentUser: user
    })

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <ShowMarvel/>} />
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
