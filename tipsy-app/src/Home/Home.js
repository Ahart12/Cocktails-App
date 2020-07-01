import React from 'react';
import {Route,Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>
        <style>
      @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
      </style>
      <body>
          <div className="Home">
         <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Disclaimer">Disclaimer</Link></li>
            <li><Link to="/Drinks">Drinks</Link></li>
            <li><Link to="/MyList">MyList</Link></li>
          </ul>
          </nav>

    
     

     
          
      </div>
      </body>
      </>
    );
  }
  
  export default Home;