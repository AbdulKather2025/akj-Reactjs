import React from 'react'
import ReactDom from 'react-dom'

 
setInterval(function(){
    ReactDom.render(
        <h1>Time Now:- {new Date().toLocaleTimeString()}</h1> ,
         document.getElementById('root')
       )}
    ,1000);
