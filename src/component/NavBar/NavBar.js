
import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './NavBar.css'

const NavBar = ({currentUser}) =>
  <nav class = "navbar is-black"role="navigation" aria-label="main navigation">
    <div class='navbar-brand'>
        <a class = "navbar-item" href = "">
        <img src = "https://i.imgur.com/Hia1gm5.png" width = "112" height="28"></img>
        </a>

        <a role = "button" class = "navbar-burger burger"aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden = "true"></span>
        </a>
    </div>

    <div id = "navbarBulma" class = "navbar-menu">
      <div class = 'navbar-start'>
        <a class = "navbar-item">
          <NavLink exact activeClassName="selected" class ="nav-item" to={routes.ROOT}>HOME</NavLink>
        </a>

        <a class = 'navbar-item'>
          <NavLink to={routes.USERS} activeClassName="selected"class ="nav-item">USERS</NavLink>
        </a>

        <a class = 'navbar-item'>
          <NavLink to={routes.POSTS} activeClassName="selected"class ="nav-item">POSTS </NavLink>
        </a>
    </div>
    <div class = 'navbar-end'>
      <a class = "navbar-item">
    {
      currentUser
        ? <span>Welcome {currentUser.username}</span>
        :  
       
          [
            <div class = 'buttons'>
                  <a class = "button is-danger">
                      <NavLink  class ="nav-item"key = {1} to={routes.REGISTER} activeClassName="selected">REGISTER </NavLink>
                  </a>
                  <a class = "button is-dark">
                      <NavLink class ="nav-item" key = {2} to={'/login'} activeClassName="selected">LOGIN </NavLink>
                  </a>
             </div>]
            
    }
      </a>
    </div>
    </div>
</nav>
export default NavBar 