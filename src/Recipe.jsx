import React from "react";
import style from "./recipe.module.css";

const Recipe = ({label, calories, image,ingredients})=>{
    return(
        <div className={style.recipe} >
        <ol>
            {ingredients.map((ingredient)=>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <h1>{label}</h1>
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />
        </div>
    );
}
export default Recipe;