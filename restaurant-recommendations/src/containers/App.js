import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import RestaurantForm from '../components/RestaurantForm'


import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleAddReviewSubmit = this.handleAddReviewSubmit.bind(this)
    this.handleAddRestaurantSubmit = this.handleAddRestaurantSubmit.bind(this)

  }

  handleAddReviewSubmit(reviewSubmission){
    this.setState({
      reviews: this.state.reviews.concat(reviewSubmission)
    })
  }

  handleAddRestaurantSubmit(restaurantSubmission){
    this.setState({
      restaurants: this.state.restaurants.concat(restaurantSubmission)
    })

  }


  //addReview funciont here to add new review by concat to reviews\
  //this will be so add to review array
  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  render() {
  
    let restaurantComponents = restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
          </div>

          <div className="small-9 columns">
            <h1>Restaurant Review Form:</h1>
            <ReviewForm
              handleAddReviewSubmit={this.handleAddReviewSubmit}
              selectedId={this.state.selectedId}
            />

          </div>

          <div className="small-9 columns">
            <h1>Add A Restaurant Form:</h1>
            <RestaurantForm
              handleAddRestaurantSubmit={this.handleAddRestaurantSubmit}
              selectedId={this.state.selectedId}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default App
