import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Title.css'


function Title() {
    return ( 
    <>
      <body>
       
      <style>
    @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
    </style>
    
        <div className="Title">
      <header>
   <h1>The <span>Tipsy</span> Turnup!</h1>
     </header>
   <main>
   <button><Link to="/Disclaimer">Enter</Link></button>
   </main>
   
   

  
   

   
        
    </div>
    
    
    </body>
    </>
  );
}
  
  export default Title;
  