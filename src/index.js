import React from 'react'
import ReactDom from 'react-dom'

 
//Object Demo
let obj ={
    fName : 'Abdul',
    lName : 'Kather'
}
const element = <h1> Welcome {obj.fName} {obj.lName}</h1>
 
ReactDom.render(  
  element,     
  document.getElementById('root')
);
 