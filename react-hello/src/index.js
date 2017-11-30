import React from 'react';
import ReactDOM from 'react-dom';
function HelloWorld() {
  return (
  <div>
    <Hello/> <World/>!
  </div>
    );
  }

function Hello() {
  return (
  <span>Hello D</span>
    );
  }

function World() {
  return (
  <span>World! Rastorguev</span>
    );
  }

function ValidIndicator() {
  var isValid = true;
  return (
    <h1>
    {/* <span>{isValid ? 'valid' : 'not valid'}</span> */}
    <br/>
    <div><World/></div>
  </h1>
  );
}

ReactDOM.render( <ValidIndicator/>, document.querySelector('#root'));
