import React from 'react';
import Slider from 'react-slick';

export default class Silder extends React.Component {
  componentDidMount() {}
  render() {
    const settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <div className="announcement alert-success">
          <span className="glyphicon" />
          公告：在线播放的问题已经解决了，感谢大家的支持，希望大家多多分享我们的网站。
        </div>
        <Slider {...settings}>
          {[1, 2, 3].map(key =>
            <div className="slide-wrapper" key={key}>
              <div className="item">
                <a target="_blank" rel="noopener noreferrer" href="http://www.xunyingwang.com/movie/467369.html">
                  <img width="100%" src="http://ww1.sinaimg.cn/large/828dc694gy1fi25kwvcvyj20s20ci7wh.jpg" alt="逆时营救迅雷下载" />
                </a>
                <div className="carousel-caption">逆时营救迅雷下载</div>
              </div>
            </div>,
          )}
        </Slider>
      </div>
    );
  }
}

