import React from 'react';
import "./About.css";
import {Link} from "react-router-dom"

function About() {
    return (
      <body>
          <div className="About">
     <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Disclaimer">Disclaimer</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Drinks">Drinks</Link></li>
     </nav>
        <main>
          <h7>Our Mission</h7>
        <p>Our Purpose is to provide adults with a variety of cocktail ideas to entertain their guests and or partygoers. As always we encourage all to be safe and before browsing our list to refer to our Disclaimer page as we support safe and responsible alcohol consumption.Please remember to Drink Responsibly!</p>
     
          </main>
      </div>
      </body>
    );
  }
  
  export default About;