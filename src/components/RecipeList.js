import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RecipieItem from "./RecipeItem"
import { BASE_URL } from "./api";

function RecipeList() {
    // Storage
    const [recipies, setRecipies] = useState ([]);

    // Getting the recipies from API
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => setRecipies(json.results))
            .catch(error => console.log(error));
    }, [])

    // Using the stuff in storage
    return (
        <div>
            {recipies.map(r => (
                <RecipieItem key={r.title} title={r.title} thumbnail={r.thumbnail}/>
            ))}
        </div>
    );
}

RecipeList.propTypes = {
    title: PropTypes.string
}

export default RecipeList;
