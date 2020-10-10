import React from "react";

function SearchRecipie({handleSearch}) {
    return (
        <input placeholder="Search..." type="text" onChange={event => handleSearch(event)} />
    )
} 

export default SearchRecipie;