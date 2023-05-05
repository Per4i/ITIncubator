import React from "react"; 

function Accordion(props){
  <div>
  <AccordionTitle/>
  {!props.collapsed && <AccordionBody/>}
  </div>
}
function AccordionTitle(props){
  return <h3>{props.title}</h3>
}
function AccordionBody(){
  return(
    <ul>
      <li>1</li> 
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}
export default Accordion;