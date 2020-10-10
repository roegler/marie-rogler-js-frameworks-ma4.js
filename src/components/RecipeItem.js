import React from "react";
import PropTypes from "prop-types";

function RecipeItem({ title, thumbnail   }) {
   
    return (
        <div>
            <p>{title}</p>
            <img src={thumbnail} alt={title} />
        </div>
    )
    
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;
