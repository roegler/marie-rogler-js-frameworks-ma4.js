import React from "react";

function IngredientList({ ingredients }) {

    const ingredientsArray = ingredients.split(', ')

    return (
        <ul>
            {ingredientsArray.map(i => (
                <li>{i}</li>
            ))}
        </ul>
    )
}

export default IngredientList;