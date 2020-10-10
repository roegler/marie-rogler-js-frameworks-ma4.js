import React from "react";
import PropTypes from "prop-types";
import { BASE_URL } from "./api";

function RecipeItem({ title, thumbnail   }) {
    /*return (
        <Recipe>
            <Recipe.Img variant="top" src={image} />
            <Recipe.Body>
                <Recipe.Title>{name}</Recipe.Title>
                <Link to={"Recipe/" + id}>
                    <Button variant="secondary" block>
                        View
                    </Button>
                </Link>
            </Recipe.Body>
        </Recipe>
    );*/
    return <p>Hello</p>
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;
