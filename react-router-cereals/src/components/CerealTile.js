import React from 'react';
import { Link } from 'react-router';

const CerealTile = props => {
  return(
    <div className="cereal">
      {/* and string interpolation, we are creating a dynamic link to each show page so that we don't have to manually define links to each cereal. */}
    <Link to={`/cereals/${props.id}`}>        <h1>{props.name}</h1>
    </Link>
    </div>
  )
}

export default CerealTile;
