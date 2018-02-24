import React from 'react';
import { browserHistory, Link } from 'react-router';

const ArticleShow = (props) => {
  return(
    <div className="article-show">
      <h2>{props.title}</h2>
      <p>{props.body}</p>

      <div className="button">
       {/* <Link to={`/`}>
        <div className="back-button">Back</div>

      </Link> */}
          <a href={'/'}>Back</a>
      </div>
    </div>
  )
}

export default ArticleShow;
