import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import ItemsTitle from './ItemsTitle';

const IndexBox = props =>
  <div className="container">
    <div>
      <ItemsTitle />
      <div className="movie-item-wrapper">
        {props.items.map(key =>
          <MovieItem key={key} items={5} />,
        )}
      </div>
    </div>
  </div>;

IndexBox.propTypes = {
  items: PropTypes.array,
};

export default IndexBox;
