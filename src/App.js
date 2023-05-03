import './App.css';
import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
function App() {
  return (
    <div>
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
      
    </div>
  );
  
  function AppTitle(){
    return(
      <div>This is APP component</div>
    )
  }
  
}

export default App;
