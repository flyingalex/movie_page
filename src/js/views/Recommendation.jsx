import React from 'react';

const Recommendation = () =>
  <div className="container">
    <div className="box-line"><span>推荐资源</span></div>
    {[1, 2, 3, 4].map(key =>
      <div className="col-xs-3 recommend-movies" key={key}>
        <a href="http://www.xunyingwang.com/movie/3267.html">
          <div className="movie-item-in">
            <img alt="《秒速5厘米》人生若只如初见，那该有多美好" title="《秒速5厘米》人生若只如初见，那该有多美好" src="http://ww1.sinaimg.cn/large/828dc694gy1fi57r2r1zyj20d707n757.jpg" />
            <div className="meta">
              <h1>
                《秒速5厘米》人生若只如初见，那该有多美好
              </h1>
            </div>
          </div>
        </a>
      </div>,
    )}
  </div>;

export default Recommendation;
