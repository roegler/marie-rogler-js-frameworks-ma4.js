import React from "react";
import RecipieItem from "./RecipeItem"
import { BASE_URL } from "./api";

function RecipeList() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            json.results
        })
        .catch(error => console.log(error));


    return null;
}

RecipeList.propTypes={
    title: PropTypes.string
}

export default RecipeList;
