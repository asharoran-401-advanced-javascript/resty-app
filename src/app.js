/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './component/header/header.js';
import Form from './component/form/form.js';
import Body from './component/body/body.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }
  handleForm = data =>{ // I get help from Qusai
    let Headers = {'Content-Type': 'application/json'};
    this.setState({Headers, Response:{data}});
  }
  render(){
    return(
      <>
        <Header />
        <Form update={this.handleForm}/>
        <Body  response={this.state}/>
      </>
    );
  }
}
export default App;