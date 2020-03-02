// eslint-disable-next-line strict
'use strict';

import React from 'react';
import './form.scss';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:'',
    };
  }

     handelClick = async e =>{
       e.preventDefault();
       let raw = await fetch(this.state.url);
       let data = await raw.json();
       this.props.update(data);
     };

     handleSelectMethod = e =>{
       let url = e.target.value;
       this.setState({url});
     };
     render(){
       return(
         <form onSubmit={this.handelClick}>
           <input type='text' className="useInput" name='url' placeholder='Enter the URL Here Please' onChange={this.handleSelectMethod} /><br/>
           <a href="/" value="GET" onClick={this.handleSelectMethod}>
          GET
           </a>
           <a href="/" value="POST" >
          POST
           </a>
           <a href="/" value="PUT" >
          UPDATE
           </a>
           <a href="/" value="PATCH">
          PATCH
           </a>
           <a href="/" value="DELETE">
          DELETE
           </a>
           <button type='submit'>Go!</button>
         </form>
       );
     }
}

export default Form;