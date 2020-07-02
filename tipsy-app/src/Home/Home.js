import React from 'react';
import {Route,Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>
        <body>
        <style>
           @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
     
           @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

      </style>
      
          <div className="Home">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Disclaimer">Disclaimer</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Drinks">Drinks</Link></li>
        
          </ul>
          </nav>

        <main>
          <div className="content">
            <div className="welcome">
              <h1>Welcome</h1>
              <img src="https://res.cloudinary.com/dz449ufvx/image/upload/v1593306830/Cocktails%20Images/nick-fewings-e2zmMst976M-unsplash_z3e5so.jpg" alt="cocktails"></img>
              <article>Feeling thirsty? Turn up to our list of cocktail ideas sure to make all of your adult gatherings a hit!</article>
            </div>
            <div className="turnup">
              <h1>The Turnup!</h1>
              <img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,w_377/v1593693442/Cocktails%20Images/lee-myungseong-y1XXWct5rBo-unsplash_ny54tf.jpg" alt="party"></img>
              <article>Be sure to visit our social handles and tag us to all of your gatherings.We love to join in and share the turnup with the rest of our following!!</article>
            </div>
          </div>
        </main>
     

     
          
      </div>
      </body>
      </>
    );
  }
  
  export default Home;