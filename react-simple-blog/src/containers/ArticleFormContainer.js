import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmitForm = this.  handleSubmitForm.bind(this);

  }
  handleTitleChange(event){
    let newArticleTitle = event.target.value
    console.log(event.target.value)
    this.setState(
      { articleTitle: newArticleTitle}
    )
  }
  handleBodyChange(event){
    let newArticleBody = event.target.value
    this.setState(
      { articleBody: newArticleBody}
    )
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      articleTitle: '',
      articleBody: ''
    })
  }

  handleSubmitForm(event){
    event.preventDefault();
    let formPayload = {
      title: this.state.articleTitle,
      body: this.state.articleBody
    }
    this.props.addNewArticle(formPayload);
    this.handleClearForm(event)
  }
  render() {

    return(
      <form  className="new-article-form callout">
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          onChange={this.handleTitleChange}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          onChange={this.handleBodyChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" onClick={this.handleSubmitForm} />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
