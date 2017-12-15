import React from 'react'
import ReactDom from 'react-dom'

//Basic Data Types Demo
let fname = 'Abdul';
let lname = 'Kather';
const msg = <h1> This is {fname} {lname}</h1>

 

ReactDom.render(
  msg,
  document.getElementById('root')
);
 
