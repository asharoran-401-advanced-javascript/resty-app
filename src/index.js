/* eslint-disable strict */
/* eslint-disable no-unused-vars */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

class Main extends React.Component{
  render(){
    return <App/>;
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);