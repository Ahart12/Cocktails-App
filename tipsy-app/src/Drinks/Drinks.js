import React, { useState, useEffect } from 'react';
import {Link, Route} from 'react-router-dom';
import './Drinks.css'

function Drinks() {
  const [drink, setDrink] = useState();
  const [allDrinks, setAllDrinks] = useState([]);
  const [myList, setMyList] = useState([]);
  const [drinks,setDrinks] = useState([]);



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


  const handleClick = async e => {
    const target = e.target.getAttribute("name")
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + target
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    setDrink({
      instructions: [json.drinks.strInstructions]
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
          {/* <div>
            <ul>
              <li>{drink.strDrink}</li>
              <li>{drink.image}</li>
            </ul>
            // <button onClick={setMyList({ drink })}>add to team</button>
          </div> */}
          </div>
        </div>
        )
        })}

      {/* Drink instructions go here */}
       <p onClick={handleClick}  name={drinks.strInstructions}>{drinks.strInstructions}</p> 
     </div>
  );
}

export default Drinks;
