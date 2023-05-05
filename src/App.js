import './App.css';
import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
function App() {
  return (
    <div>
      <AppTitle/>
      <Accordion titleValue = {"Menu"} collapsed = {true}/>
      <Accordion titleValue = {"Users"} collapsed = {false}/>
      <Rating value = {1}/>
    </div>
  );
  
  function AppTitle(){
    return(
      <div>This is APP component</div>
    )
  }
  
}

export default App;
