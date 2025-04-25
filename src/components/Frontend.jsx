

import frontend from '../components/frontend.json';

const Frontend =()=>{

  
    return(
      
<div class="w3-row-padding " id="main" >
        {frontend.map((data, i) => (
            <div key={i}>
<div class="w3-third " >
<div class="w3-border w3-hover-border-lime w3-round-large  w3-padding-32 w3-hover-shadow w3-margin">
<div class="w3-margin w3-padding-large " style={{height:"160px", wordSpacing:"2px",fontFamily:"News Cycle", fontSize:"21px", fontWeight:"bolder", letterSpacing:"1px" , wordWrap:"true"}}>
                 {data.title}</div>            
            
					<p class=" w3-padding w3-padding-32" style={{fontFamily:"Rockwell" , letterSpacing:"2px" }}>
                        <span class="w3-border w3-bottombar w3-rightbar w3-small w3-hover-border-khaki  w3-padding w3-margin">Github </span>
					<span class="w3-margin  w3-small w3-border w3-bottombar w3-rightbar  w3-hover-border-khaki w3-padding">Link</span>
					</p>
</div>   </div>  </div>
               
              ))}





        
    

</div>

  
    );
}

export default Frontend;