/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
'use strict';
import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import './nav.scss';
const Nav = props => {
  return (
    <nav>
      <ul>
        <li className="nav-list">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-list">
          <NavLink className="nav-link" to="/history"> history </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;