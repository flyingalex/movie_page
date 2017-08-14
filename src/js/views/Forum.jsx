import React from 'react';

const Forum = () =>
  <div className="container">
    {[1, 2, 3, 4, 5, 6, 7, 8].map(key =>
      <div className="col-xs-3 forum" key={key}>
        <div className="movie-item-in">
          <a title="[2011][美国][喜剧][维普啦啦][BT下载][BD-MP4/1.07G][英语中文字幕]" rel="noopener noreferrer" target="_blank" href="/topic/113421.html">
            <img alt="[2011][美国][喜剧][维普啦啦][BT下载][BD-MP4/1.07G][英语中文字幕]" title="[2011][美国][喜剧][维普啦啦][BT下载][BD-MP4/1.07G][英语中文字幕]" src="http://ww4.sinaimg.cn/large/87c01ec7gy1fiendx6la4j20zk0k0adn.jpg" />
            <div className="item-hover" />
          </a>
          <div className="meta">
            <h1><a href="/topic/113421.html" target="_blank" rel="noopener noreferrer" title="[2011][美国][喜剧][维普啦啦][BT下载][BD-MP4/1.07G][英语中文字幕]">[2011][美国][喜剧][维普啦啦][BT下载][BD-MP4/1.07G][英语中文字幕]</a></h1>
          </div>
        </div>
      </div>,
    )}
  </div>;

export default Forum;
