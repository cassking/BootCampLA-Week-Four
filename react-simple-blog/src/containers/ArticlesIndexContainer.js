import React, { Component } from 'react';
import ArticleTile from '../components/ArticleTile';
import ArticleFormContainer from '../containers/ArticleFormContainer';
import { browserHistory, Link } from 'react-router';

class ArticlesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    this.addNewArticle = this.addNewArticle.bind(this)
  }

  componentDidMount() {
    fetch("/api/v1/articles")
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
         // articles: this.state.articles.concat(dataParsed)
         articles:dataParsed
       })
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewArticle(formPayLoad) {
      fetch(`/api/v1/articles`, {
      method: 'post',
      body: JSON.stringify(formPayLoad)
    }).then( (response) => response.json())
    .then(data => {
      this.setState({
       articles: this.state.articles.concat(data)
     })
    })
      .catch((err)=>console.log(err))
    }


  render() {

    let articles = this.state.articles.map(article => {
      return(
        <ArticleTile
          key={article.id}
          id={article.id}
          title={article.title}
          body={article.body}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1>My Blog!</h1>
          {/* <Link to={`/articles/${props.id}`}>{props.title}</Link> */}

          <hr/>
          {articles}
          {this.props.children}

          <ArticleFormContainer addNewArticle={this.addNewArticle} />
        </div>
      </div>
    )
  }
}

export default ArticlesIndexContainer;
