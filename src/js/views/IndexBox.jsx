import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import ItemsTitle from './ItemsTitle';

const IndexBox = props =>
  <div className="container">
    <div>
      <ItemsTitle />
      {props.items.map(key =>
        <MovieItem key={key} items={5} />,
      )}
    </div>
  </div>;

IndexBox.propTypes = {
  items: PropTypes.array,
};

export default IndexBox;
