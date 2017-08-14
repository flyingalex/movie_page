import React from 'react';
import MovieItem from './MovieItem';

const LatestMovie = () =>
  <div className="container">
    <div className="col-xs-9 latest-movie">
      <h2 className="index-title">
        最新电影
        <span className="more-latest">
          <a target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/">更多&gt;&gt;</a>
        </span>
      </h2>
      <div className="row latest-movie">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(key =>
          <MovieItem key={key} />,
        )}
      </div>
      <div className="col-xs-12 small-banner" />
    </div>
    <div className="col-xs-3 hot-movie">
      <h3>热门电影</h3>
      <div className="list-group">
        {[1, 2, 3].map(key =>
          <a key={key} title="异形：契约-迅雷下载" target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/241849.html" className="list-group-item">
            <span className="square-item-red">{key}</span>异形：契约
          </a>,
        )}
        {[4, 5, 6, 7, 8, 9, 10].map(key =>
          <a key={key} title="异形：契约-迅雷下载" target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/241849.html" className="list-group-item">
            <span className="square-item-blue">{key}</span>异形：契约
          </a>,
        )}
      </div>
      <h3>本周精选</h3>
      <div className="list-group">
        {[1, 2, 3].map(key =>
          <a key={key} title="异形：契约-迅雷下载" target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/241849.html" className="list-group-item">
            <span className="square-item-red">{key}</span>异形：契约
          </a>,
        )}
        {[4, 5, 6, 7, 8, 9, 10].map(key =>
          <a key={key} title="异形：契约-迅雷下载" target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/241849.html" className="list-group-item">
            <span className="square-item-blue">{key}</span>异形：契约
          </a>,
        )}
      </div>
    </div>
  </div>;

export default LatestMovie;
