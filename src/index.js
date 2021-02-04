/*
const element = document.createElement('h1');
element.innerText = 'Hola mundo';

const container = document.getElementById('root');
container.appendChild(element);
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import 'boostrap/dist/css/boostrap.css';
const container = document.getElementById('root');

//ReactDOM.render( __que__, __donde__)
ReactDOM.render(<Card/>, container);
