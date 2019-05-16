import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import ShowMarvel from './component/ShowMarvel/ShowMarvel'
import Register from './component/Register/Register'
import ShowCharacter from './component/ShowCharacter/ShowCharacter'
import CreateFavorite from './component/Favorites/CreateFav'

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

  getChar = async(name)=>{
    const people = await fetch(`/api/v1/${name}`)
    const jsonPeople = await people.json()
    this.setState({char: jsonPeople.char})
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={(props) => <ShowMarvel props={props} characters={this.state.char} search={this.getChar}/>} />
          <Route exact path={`/character/:id`} render={() => <ShowCharacter currentUser={this.state.currentUser}/>} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.POSTS} render={() => <CreateFavorite/>} />
          <Route exact path={routes.REGISTER} render={() => <Register currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>}/>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}



export default App;
