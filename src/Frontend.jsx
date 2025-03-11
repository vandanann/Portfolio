import './frontend.css';

import frontend from './frontend.json';

const Frontend =()=>{

    
    return(
      
<div class="w3-row-padding ">
        {frontend.map((data, i) => (
            <div key={i}>
<div class="w3-third">
<div class="w3-border w3-round-xlarge w3-padding-32  w3-hover-shadow w3-margin">
<div class="w3-container w3-margin " style={{fontFamily:"DM Mono", fontWeight:"" , fontSize:"19px"}}>
                  {data.title}</div>            
            
					<p class="w3-padding" style={{fontFamily:"Nixie One" , letterSpacing:"2px" , fontWeight:"bold"}}><span class="w3-margin w3-border w3-hover-border-red w3-hover-text-red w3-padding">Github </span>
					<span class="w3-margin w3-border  w3-hover-text-red w3-hover-border-pink w3-padding">Link</span>
					</p>
</div>   </div>  </div>
               
              ))}






        
    

</div>

  
    );
}

export default Frontend;