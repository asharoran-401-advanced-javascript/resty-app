/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJson from 'react-json-view';
import './body.scss';

function Boby (props){
  if (props.response.Headers) {
    console.log('response' , props.response);
    return (
      <section>
        <ReactJson src= {props.response} />
      </section>
    );
  }else return <section></section>;
}
export default Boby;