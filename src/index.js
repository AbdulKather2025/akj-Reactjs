import React from 'react'
import ReactDom from 'react-dom'
 
//Function Demo
function cube(a) {
    return <h1>Cubic Value is {a*a*a} </h1>
}

ReactDom.render(
  cube(11),
  document.getElementById('root')
);
