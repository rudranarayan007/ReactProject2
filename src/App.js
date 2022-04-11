import manimg from './manimg.jpg'
import logo from './logo.png'
import fb from './fb.png'
import utube from './utube.png'
import twitter from './twitter.png'
import cam from './cam.png'

function App() {
  return (
    <div>
      <div className="menu-wrap" />
      <input type="checkbox" className="toggler" />
      <div className="hamburger" />

      <div />
      <div className="menu">
        <div />
        <div />

        <div className="purple">
          <div className="logo">
          <img src= {logo} />
          </div>

          <div className="info">
            <h5>
            Email: <br />
            rd43057@gmail.com <br /> <br />
            Phone: <br />
            +91 824 432 4345 <br />
             <br />
             Find Me on: <br />
            </h5>
           <div id="social" />
           <img src= {fb} />
           <img src= {twitter} />
           <img src= {cam} />
           <img src= {utube} />
          </div>
         </div>
        </div>

        <div className="red">
          <div className="image">
            <img src= {manimg} />
          </div>
          <div className="content">
            <h2>
              SANTUSH <br /> <span>DEB</span>
            </h2>
            <p className="paragraphone"> Creative Director - Saint Studios</p>
            <p>
              {" "}
              I’m Santush Deb Nath, a huge HTML lover. <br />
              A 25-year-old living in a small but damn beautiful <br />
              country called India.
            </p>
            <div class="btn">
              <button className="portfolio">PORTFOLIO</button>
              <button className="resume"> RESUME</button>
            </div>
          </div>
        </div>

        <div className="purplesmall"> </div>
      </div>
   
    
  )
}
export default App;
