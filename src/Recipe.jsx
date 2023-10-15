import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image,ingredients})=>{
    return(
        <div className={style.recipe} >
        <ol>
            {ingredients.map((ingredient)=>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <h1>{title}</h1>
        <p style={{color: "blue", fontWeight: "bold"}}>{Math.ceil(calories)} Calories</p>
        <img className={style.image} src={image} alt="" />
        </div>
    );
}
export default Recipe;