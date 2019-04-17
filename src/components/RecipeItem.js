import React from 'react'

const withHighlight = (text, highlight = '') => {

    if(highlight === '') {
        return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map(part => part.toLowerCase().includes(highlight.toLowerCase()) ? <mark>{part}</mark> : part)
}


const RecipeItem = ({recipe, highlight}) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={recipe.thumbnail} alt={recipe.title} />
            <div className="card-body">
                <h5 className="card-title">{withHighlight(recipe.title, highlight)}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{withHighlight(recipe.ingredients, highlight)}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;