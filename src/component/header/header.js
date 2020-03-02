/* eslint-disable no-unused-vars */
import React from 'react';
import '../../component/header/header.scss';
import Nav from '../nav/nav.js';

function Header (){
  return(
    <div>
      <h1> RESTy App
        <Nav/>
      </h1>
    </div>
  );
}
export default Header;