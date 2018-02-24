import React from 'react';
import { Link } from 'react-router';

const ArticleTile = (props) => {
  return(
    <div className="article-tile">
      <a href={`/articles/${props.id}`}>
        <p>{props.title}</p>
      </a>
      {/* <Link to={`/articles/${props.id}`}>{props.title}</Link> */}

      <hr/>
    </div>
  )
}

export default ArticleTile;
