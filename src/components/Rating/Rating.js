function Rating(props){
    return <div>
      <Star selected = {props.value === 1}/>
      <Star selected = {false}/>
      <Star selected = {false}/>
      <Star selected = {false}/>
      <Star selected = {false}/>

    </div>
  }
  function Star(props){
        if(props.selected === true){
            return <span><b>Star </b></span>
        }else{
            return <span>Star </span>
        }
      
    
  }
export default Rating;