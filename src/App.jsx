import Frontend from "./Frontend"


function App() {
  

  return (
    
      <>

<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" style={{background:"#0e2431"}}>
  
  
  <a href="#" class="w3-bar-item  w3-xxxlarge w3-padding-large ">

    <p>VN</p>
  </a>
  <a href="#about" class="w3-bar-item w3-padding-large  ">

    <p>React</p>
  </a>
  <a href="#photos" class="w3-bar-item w3-padding-large">
    
    <p>Next.js</p>
  </a>
  <a href="#contact" class="w3-bar-item w3-padding-large ">
    <p>.NET Core</p>
  </a>
  <a href="#contact" class="w3-bar-item w3-padding-large ">
    <p>Blazor</p>
  </a>
</nav>

<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar  w3-center w3-small" style={{background:"#0e2431"}}>
    <a href="#" class="w3-bar-item " style={{width:"25%"}}>React</a>
    <a href="#about" class="w3-bar-item " style={{width:"25%"}}>Next.js</a>
    <a href="#photos" class="w3-bar-item " style={{width:"25%"}}>.NET Core</a>
    <a href="#contact" class="w3-bar-item " style={{width:"25%"}}>Blazor</a>
  </div>
</div>

<div class="w3-padding-large" id="main">

  <header class=" w3-container w3-padding-64 w3-center" id="home" style={{background:"#dbd8e3"}}>
    <h1 class="w3-xxxlarge w3-padding w3-panel " style={{background:"#dbd8e3", fontFamily:"Castellar" , letterSpacing:"2px",wordSpacing:"5px" ,color:"#272343" , fontWeight:"700"}}><span class="w3-hide-small">I'm</span> Vandana Nipane</h1> <br/>
    <h1 class ="w3-xxlarge"style={{background:"#dbd8e3", fontFamily:"Century Schoolbook", color:"#272343"}}>Full Stack Application Developer</h1>
 
  </header>
  <div class="w3-content w3-justify w3-padding-64" id="about" >
    <h2 class="">About Me</h2>
    <hr style={{width:"200px"}}/>
    <p>Hello, I am Vandana. I am experiend full stack developer. I have strong understanding in C# programming language.  I have worked with .NET frameworks & .NET Core, React-JavaScript, React-TypeScript, React-Redux, Next.js-TypeScript projects.
      Currently, I am working wih GIS application development, such as ArcGIS API for JS and Google GIS API.
    </p>
    <h2 class="w3-padding-16">My Skills</h2>
    <p class="w3-tag w3-round">C#</p> <p class="w3-tag  w3-round">TypeScript</p> <p class="w3-tag w3-round">JavaScript</p>
    <p class="w3-tag w3-round">Firebase</p>  <p class="w3-tag w3-round">MongoDB</p>  <p class="w3-tag w3-round">React-Redux</p>
      <p class="w3-tag w3-round">Automated Testing</p>  <p class="w3-tag w3-round">Jest</p>  <p class="w3-tag w3-round">Cypress</p>
    <p class="w3-tag w3-round">TDD</p> 
<br/>
    
   





</div>
        
        
<Frontend/>
    
</div>

  </>

  )
}

export default App
