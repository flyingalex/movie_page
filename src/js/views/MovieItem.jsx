import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = props =>
  <div className={`${props.items === 5 ? 'col-xs-2' : 'col-xs-3'} movie-item`}>
    <div className="movie-item-in">
      <a className="movie-link" href="http://www.xunyingwang.com/movie/619915.html">
        <img src="http://img1.xmspc.com/uploads/movie-poster/bkiucjtr7ia8.jpg" alt="生死之墙" title="生死之墙" />
        <span className="qtag bdtag">超清</span>
        <div className="item-hover" />
      </a>
      <div className="meta">
        <h1>
          <a href="http://www.xunyingwang.com/movie/619915.html" rel="noopener noreferrer" target="_blank" title="生死之墙">生死之墙</a>
          <em> - 6.8分</em>
        </h1>
        <div className="otherinfo">类型：
          <a target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/?tag=%E5%89%A7%E6%83%85" className="movietype">剧情</a>
          <a target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/?tag=%E6%88%98%E4%BA%89" className="movietype">战争</a>
          <a target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/?tag=%E6%83%8A%E6%82%9A" className="movietype">惊悚</a>
        </div>
      </div>
    </div>
  </div>;

MovieItem.propTypes = {
  items: PropTypes.number,
};

export default MovieItem;
