import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropdownComponent from"./component/DropdownComponent"
import menuArray from"./component/menuArray"


class App extends React.Component{

 
  

render(){

  

  return (
   <div>
 

 {menuArray.map(function(m,index){
    return <DropdownComponent  
    key={index}
    menu={m}/>
  })}
 
   </div>
  );
}
}
export default App;
