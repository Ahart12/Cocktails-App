import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Disclaimer.css';


function Disclaimer() {
    return (
      <body>
          <nav>
            <h6><Link to="Home">The Turnup!</Link></h6>
            </nav>
          <div className="Disclaimer">
     
       <h5>Remember to Drink Responsibly</h5>
       <p>We support living life to the fullest while exhibiting responsible alcohol consumption. Remember to always use good common sense when drinking. Our products is not a replacement for your own good common sense.<br></br>

We do not support underage drinking, excessive drinking, binge drinking or any other unsafe drinking behavior.  DO NOT drink and drive while using any of the products we have listed.  It is the sole responsibility of every single individual to ensure they are under the legal alcohol limit before driving or being in control of any vehicle with or without an engine.</p>
       
     
          
      </div>
      </body>
    );
  }
  
  export default Disclaimer;