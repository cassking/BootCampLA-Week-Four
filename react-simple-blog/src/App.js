import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleShowContainer from './containers/ArticleShowContainer';
import ArticleFormContainer from './containers/ArticleFormContainer';


const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={ArticlesIndexContainer} />
      <Route path="/articles/:id" component={ArticleShowContainer} />
    </Router>
  );
}

export default App;
