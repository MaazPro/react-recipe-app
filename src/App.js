import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = 'cde205e5';
  const APP_KEY = '324e18ce5dd552a1a95f9b0f8e34f38b';
  
  const [query, setQuery] = useState('veggies');
  useEffect(() => {getRecipe()}, [query]);
  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getRecipe = async ()=>{
      const response = await fetch(exampleReq);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }

  const updateSearch = (event)=>{
      setSearch(event.target.value);
      console.log(search);

  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App scroll-bg">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
      {
        recipe.map((recipe)=>(
          <Recipe 
            key = {recipe.recipe.label}
            title ={recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients ={recipe.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  );
}
export default App;