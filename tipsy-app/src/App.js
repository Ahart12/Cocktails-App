import React,{ useState, useEffect } from 'react';
import Drinks from "./Drinks/Drinks";
import './App.css';
import {Route, Link, Switch, } from 'react-router-dom';
import Title from './Title/Title';
import Disclaimer from "./Disclaimer/Disclaimer";
import Home from "./Home/Home";
import About from "./About/About";


function App() {

    // const [allDrinks, setAllDrinks] = useState([]);
    // const [myList, setMyList] = useState([]);
  
  

    // useEffect(() => {
    //   allDrinksAPI();
    // }, []);

    // const allDrinksAPI = async () => {
    //   const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;
    //   const response = await fetch(URL);
    //   const json = await response.json();
    //    console.log(json)
      
    //    setAllDrinks(json);
    // };

    // My cocktail api
    //  https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
 
  return (
    <Switch>
     
    <div className="App">
      <nav>
       <Route exact path="/" component={Title} />
       <Route exact path="/Home" component={Home}/>
       <Route exact path="/Disclaimer" component={Disclaimer}/>
       <Route exact path="/About" component={About}/>
       <Route exact path="/Drinks" component={Drinks}/>
      </nav>
   
   
  </div>
    <div> 
      
        
          
       
      
    </div>
  </Switch>
  
  );
}

  

       
  



export default App;
