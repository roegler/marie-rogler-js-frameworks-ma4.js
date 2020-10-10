import React, { useState, useEffect } from "react";
import RecipieItem from "./RecipeItem";
import SearchRecipie from "./SearchRecipe";
import { BASE_URL } from "./api";

function RecipeList() {
    // Storage
    const [recipies, setRecipies] = useState([]);
    const [filtredRecipies, setFilteredRecipies] = useState([]);

    // Getting the recipies from API
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipies(json.results)
                setFilteredRecipies(json.results)
            })
            .catch(error => console.log(error));
    }, [])

    const searchRecipies = function (event) {
        console.log(event.target.value)
        const searchText = event.target.value.toLowerCase();
        const filteredArray = recipies.filter(r => {
            return r.title.toLowerCase().startsWith(searchText)
        })
        setFilteredRecipies(filteredArray);
    }

    // Using the stuff in storage
    return (
        <div>
            <SearchRecipie handleSearch={searchRecipies} />
            {filtredRecipies.map(r => (
                <RecipieItem key={r.title} title={r.title} thumbnail={r.thumbnail} />
            ))}
        </div>
    );
}

export default RecipeList;
