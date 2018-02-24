import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import ShortySprout from '../components/ShortySprout';
import LongestSprout from '../components/LongestSprout';
import SproutsIndex from '../components/SproutsIndex';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: [],
      shorty:'',
      longest:''
    }
  }

  getLongestRecipe(){
    fetch("/api/v1/longest-recipe")
    .then(response => {
      console.log("response", response)
     if (response.ok) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.text())
   .then(data => {
     let dataParsed = JSON.parse(data);
     console.log(dataParsed);
     this.setState({
       recipe:'',
       recipes:[],
       shorty:'',
       longest:dataParsed
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  getShortyRecipe(){
    fetch("/api/v1/shortest-recipe")
    .then(response => {
      console.log("response", response)
     if (response.ok) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.text())
   .then(data => {
     let dataParsed = JSON.parse(data);
     console.log(dataParsed);
     this.setState({
       recipe:'',
       recipes:[],
       shorty:dataParsed,
       longest:''
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  getRandomRecipe(){
    fetch("/api/v1/random-recipe")
    .then(response => {
      console.log("response", response)
     if (response.ok) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.text())
   .then(data => {
     let dataParsed = JSON.parse(data);
     console.log(dataParsed);
     this.setState({
       recipe:dataParsed,
       recipes:[],
       shorty:'',
       longest:''
     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getAllRecipes(){

    fetch("/api/v1/recipes")
    .then(response => {
      console.log("response", response)
     if (response.ok) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
       throw(error);
     }
   })
   .then(response => response.text())
   .then(data => {
     let dataParsed = JSON.parse(data);
     console.log(dataParsed);
     this.setState({
       recipes:dataParsed,
       recipe:'',
       shorty:'',
       longest:''

     })
   })
   .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }
    let handleShortyClick = () => {
      this.getShortyRecipe();
    }

    let handleLongestClick = () => {
      this.getLongestRecipe();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <ShortySprout
          shorty={this.state.shorty}
        />
        <LongestSprout
          longest={this.state.longest}
        />
        <RandomSprout
          recipe={this.state.recipe}
        />
        <SproutsIndex
          recipes={this.state.recipes}
        />

        <div className="buttons">

          <button onClick={handleShortyClick} className="btn"> Shorty Recipe</button>

          <button onClick={handleLongestClick} className="btn"> Longest Recipe</button>

          <button onClick={handleRandomClick} className="btn"> Random Recipe</button>

          <button onClick={handleIndexClick} className="btn">All Recipes</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
