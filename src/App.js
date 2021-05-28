//import logo from './logo.svg';
import './App.css';
import './style.css'
import imageInSrc from './imageInSrc.png'

function App() {
  return (
    <div className="App">
      
      <div  style={{border:"solid 1px black" max-width:"100vw"}}>
          <h1 className="title red">Soltani Oumaima</h1>
          <img src = {imageInSrc} alt = "ImgeSrc" />
          <br/>
          
          <img src = './imageInPublic.png'  alt = "imgeInPublic"/>
          <br/>

      </div>

          <video width="320" height="240" controls>
            <br/>

              <source src="myVideo.mp4" type="video/mp4" />

          </video>
      

      


      {/* <div style="border:solid 1px black;max-width:100vw">

        <h1 class="title red">Your name here</h1>

        <br />

        <img src="/imageInSrc.jpg" />

        <br />

        <img src="/imageInPublic.jpg" />

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
      */}
      
    </div>
  );
}

export default App;
