import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleShowContainer from './containers/ArticleShowContainer';

let indexPage = document.getElementById('index');
let showPage = document.getElementById('show');

if(indexPage){
  ReactDOM.render(
    <ArticlesIndexContainer />,
    indexPage
  )
}

if(showPage){
  ReactDOM.render(
    <ArticleShowContainer />,
    showPage
  )
}
