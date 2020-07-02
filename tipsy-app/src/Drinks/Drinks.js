import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Drinks.css'

function Drinks() {
  const [drink, setDrink] = useState();
  const [allDrinks, setAllDrinks] = useState([]);
  const [myList, setMyList] = useState([]);
  const [drinks, setDrinks] = useState([]);



  useEffect(() => {
    allDrinksAPI();
  }, []);

  const allDrinksAPI = async () => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json)

    setAllDrinks(json.drinks);
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  const handleClick = async e => {
    const target = e.target.getAttribute("name")
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + target
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.drinks[0].strInstructions);

    scrollTop()
    
    setDrink({
      instructions: json.drinks[0].strInstructions
    })

  };

  //   if (drink === undefined || props.myList === []) {
  //   console.log(props.myList);
  //    return(
  //     <div>
  //     {props.allDrinks.map((drink, i) => {
  //       return (
  //         <h2 onClick={handleClick} key={i} url={drink.url}>
  //           {drink.name}
  //         </h2>
  //       );
  //     })}
  //   </div>
  // );

  // } else {
  if (drink === undefined) {
    return (
      <div>
        <nav><Link to="/Home">Home</Link></nav>
        {allDrinks.map((drink, i) => {
          return (<div>
            <h2 onClick={handleClick} key={i} name={drink.strDrink}>
              {drink.strDrink}
            </h2>
            <div className="images">
              <img onClick={handleClick} name={drink.strDrink} src={drink.strDrinkThumb}></img>
            </div>
          </div>
          )
        })}

      </div>
    )
  } else {
    return (
      <div>
        <nav><Link to="/Home">Home</Link></nav>
        <p >{drink.instructions}</p>
        {allDrinks.map((drink, i) => {
          return (<div>
            <h2 onClick={handleClick} key={i} name={drink.strDrink}>
              {drink.strDrink}
            </h2>
            <div className="images">
              <img onClick={handleClick} name={drink.strDrink} src={drink.strDrinkThumb}></img>
            </div>
          </div>
          )
        })}

        {/* Drink instructions go here */}
      </div>
    );
  }
}

export default Drinks;
