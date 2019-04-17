import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import { NoResults } from './NoResults'
import recipes from '../sample_data/recipes.json'

class App extends Component {

  state = {
    searchString: '',
    recipes: recipes.results
  };

  handleSearch = event => this.setState({searchString: event.target.value})

  matchWithSearchString = (recipe) => {
   return recipe.title.toLowerCase().includes(this.state.searchString.toLowerCase()) ||
          recipe.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase())
  }

  filteredRecipes = () => (
     this.state.recipes
            .filter(recipe => this.matchWithSearchString(recipe))
            .map((recipe,index) =>
             <RecipeItem key={index} recipe={recipe} highlight={this.state.searchString} />)
  )


  render() {

    const recipes = this.filteredRecipes()

    return (
      <div className="App">
        <Navbar handleSearch={this.handleSearch} searchString={this.state.searchString} />
        <div className="container mt-10">
          <div className="row"> {recipes} </div>
          { !recipes.length && <NoResults /> }
        </div>
      </div>
    );
  }
}


export default App;
