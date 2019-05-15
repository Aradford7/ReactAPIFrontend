import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './NavBar.css'

const NavBar = ({currentUser}) =>
  <div>
    <h5>NAVBAR</h5>
    <NavLink exact activeClassName="selected" to={routes.ROOT}>ROOT</NavLink>
    <NavLink to={routes.HOME} activeClassName="selected">HOME </NavLink>
    <NavLink to={routes.USERS} activeClassName="selected">USERS </NavLink>
    <NavLink to={routes.POSTS} activeClassName="selected">POSTS </NavLink>
    {
      currentUser
        ? <span>hello {currentUser.username}</span>
        :  
          [<NavLink  key = {1} to={routes.REGISTER} activeClassName="selected">REGISTER </NavLink>,
          <NavLink key = {2} to={'/login'} activeClassName="selected">LOGIN </NavLink>]
    }
  </div>

export default NavBar