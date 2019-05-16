import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './NavBar.css'

const NavBar = ({currentUser}) =>
  <div class = "navbar">
    <div class='navbar-menu'>
      <div class = 'navbar-end'>
    <NavLink exact activeClassName="selected"class ="nav-item" to={routes.ROOT}>HOME</NavLink>
    <NavLink to={routes.USERS} activeClassName="selected"class ="nav-item">USERS</NavLink>
    <NavLink to={routes.POSTS} activeClassName="selected"class ="nav-item">POSTS </NavLink>
    {
      currentUser
        ? <span>Welcome {currentUser.username}</span>
        :  
          [<NavLink  class ="nav-item"key = {1} to={routes.REGISTER} activeClassName="selected">REGISTER </NavLink>,
          <NavLink class ="nav-item" key = {2} to={'/login'} activeClassName="selected">LOGIN </NavLink>]
    }
    </div>
  </div>
</div>
export default NavBar

// <NavLink to={routes.HOME} activeClassName="selected">HOME </NavLink>