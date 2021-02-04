/*
const element = document.createElement('h1');
element.innerText = 'Hola mundo';

const container = document.getElementById('root');
container.appendChild(element);
*/
import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'Edi',
  lastName: 'Selimi',
}

function getName(user){
  return `${user.firstName} ${user.lastName}`;
}


function getGreeting(user){
  if(user){
    <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const element = (
  <div>
    <h1>
      {getGreeting(user)}
    </h1>
  </div>
)
const container = document.getElementById('root');

//ReactDOM.render( __que__, __donde__)

ReactDOM.render(element, container);
