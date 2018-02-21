import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: '',
    rating:'20',
    content: ''

  }
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleRatingChange = this.handleRatingChange.bind(this)
  this.handleReviewChange = this.handleReviewChange.bind(this)
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleNameChange(event){
    console.log(event.target.value)
    let newName = event.target.value
    this.setState({
      name: newName
    })
  }
  handleRatingChange(event){
    console.log(event.target.value)
    let newRating = event.target.value
    this.setState({
      rating: newRating
    })
  }
  handleReviewChange(event){
    console.log(event.target.value)
    let newReview = event.target.value
    this.setState({
      content: newReview
    })
  }
  handleFormSubmit(event){

    event.preventDefault();
    console.log('FORM SUBMITTED, this is state:', this.state);
    ///to create a new review set
    //sent some sort of submiisssion payload to app
    //and clear form for next submission
    //we are in ReviewForm.js
    //
    let reviewPayload = {
      restaurant_id: this.props.selectedId,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
      // debugger
    this.props.handleAddReviewSubmit(reviewPayload)
    console.log('payload',reviewPayload)

  }
  render() {
  return (
    <div>
     <form  onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.name}>Name:
          <input
            name={this.name}
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
        />
        </label>
        <label htmlFor="rating">Rating
        <select
          name={this.rating}
          value={this.rating}
          onChange={this.handleRatingChange}>
          <option value="20">1 star</option>
          <option value="40">2 stars</option>
          <option value="60">3 stars</option>
          <option value="80">4 stars</option>
          <option value="100">5 stars</option>
          </select>
        </label>
        <label htmlFor={this.content}>Review:
          <input
            name={this.review}
            type="text"
            value={this.state.content}
            onChange={this.handleReviewChange}
          />
        </label>

        <input type="submit" value="Add Review" />
      </form>
    </div>
  )
}
}


export default ReviewForm
