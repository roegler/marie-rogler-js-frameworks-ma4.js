import React from "react";
import PropTypes from "prop-types";
import IngredientList from "./IngredientList";

function RecipeItem({ title, thumbnail, ingredients }) {
   
    return (
        <div>
            <p>{title}</p>
            <img src={thumbnail} alt={title} />
            <IngredientList ingredients={ingredients} />
        </div>
    )
    
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
};

export default RecipeItem;
