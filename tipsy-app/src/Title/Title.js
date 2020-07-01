import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Title.css'


function Title() {
    return (
      <body>
        <>
      <style>
    @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
    </style>
    
        <div className="Title">
   <h1>The <span>Tipsy</span> Turnup!</h1>
   <ul><li><Link to="/Disclaimer">Enter</Link></li>
   
   
   </ul>

  
   

   
        
    </div>
    
    </>
    </body>
  );
}
  
  export default Title;
  