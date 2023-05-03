function Rating(){
    return <div>
      <Star selected = {true}/>
      <Star selected = {true}/>
      <Star selected = {false}/>
      <Star selected = {false}/>
      <Star selected = {true}/>

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