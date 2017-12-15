import React from 'react'
import ReactDom from 'react-dom'

//Arrow Function Demo
let fun = (a,b) =>  <h1>Addition of two Numbers {a+b} </h1>;

ReactDom.render(
  fun(10,20) ,
  document.getElementById('root')
);
