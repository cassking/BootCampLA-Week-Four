import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';
import LongestRecipe from '../components/LongestRecipe';
import ShortestRecipe from '../components/ShortestRecipe';



const ALLRECIPIES ="/api/v1/recipes"
const RANDOMRECIPE = "/api/v1/random-recipe"
const LONGESTRECIPE = "/api/v1/longest-recipe"//match your ruby routehere
const SHORTESTRECIPE = "/api/v1/shortest-recipe"//match your ruby routehere

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: [],
      longestRecipe: '',
      shortestRecipe: ''
    }
    this.getRandomRecipe = this.getRandomRecipe.bind(this)
    this.getAllRecipes = this.getAllRecipes.bind(this)
    this.getLongestRecipe = this.getLongestRecipe.bind(this)
    this.getShortestRecipe = this.getShortestRecipe.bind(this)

  }

  getRandomRecipe(){
    fetch(RANDOMRECIPE)
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })//end frist response
      // .then(response => response.json())
      .then(randomRecipeData => {
        console.log('randomRecipeData log: ', randomRecipeData)
        this.setState({
          recipe: randomRecipeData,
          recipes: [],//reset to empty array on render
          longestRecipe:"",
          shortestRecipe:"",

         });
      })//end body response
      .catch(error => console.error(`Error in random fetch: ${error.message}`));

  }

  getAllRecipes(){
    fetch(ALLRECIPIES)
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })//end frist response
      // .then(response => response.json())
      .then(allRecipiesData => {
        console.log('allRecipiesData log: ', allRecipiesData)
        this.setState({
          recipes: allRecipiesData,
          recipe: "",//on render clear single random
          longestRecipe:"",
          shortestRecipe:""


         });

      })//end body response
      .catch(error => console.error(`Error in all recipes fetch: ${error.message}`));

  }
  getLongestRecipe(){
    fetch('/api/v1/longest-recipe')
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( longestRecipeData => {
        console.log('longestRecipeData log: ', longestRecipeData)
        this.setState({
          recipe:"",
          recipes: [],
          shortestRecipe:"",
          longestRecipe: longestRecipeData})
      })
      .catch(error => console.error())
  }


  getShortestRecipe(){
    fetch(SHORTESTRECIPE)
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( shortestRecipeData => {
        console.log('shortestRecipeData log: ', shortestRecipeData)
        this.setState({
          recipe:"",
          recipes: [],
          longestRecipe: "",
          shortestRecipe: shortestRecipeData})
      })
      .catch(error => console.error())
  }

  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }
    let handleLongestClick =() =>{
        this.getLongestRecipe();
    }
    let handleShortestClick =() =>{
        this.getShortestRecipe();
    }


    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          //one recipe tile
          randomRecipe={this.state.recipe}
        />
        <SproutsIndex
          //all recipes
          recipes={this.state.recipes}
        />
        <LongestRecipe
          //all recipes
          longestRecipe={this.state.longestRecipe}
        />

        <ShortestRecipe
          //all recipes
          shortestRecipe={this.state.shortestRecipe}
        />

        <div className="buttons">
          <button
            onClick={handleRandomClick}
            className="btn">Random Recipe
          </button>

          <button
            onClick={handleIndexClick}
            className="btn">All Recipes
          </button>

          <button
            onClick={handleLongestClick}
            className="btn">Longest Recipe
          </button>
          <button
            onClick={handleShortestClick}
            className="btn">Shorty Recipe
          </button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
