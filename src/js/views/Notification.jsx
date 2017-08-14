import React from 'react';

const Notification = () =>
  <div className="page-container">
    <div className="note-wrapper container">
      <span className="note note-left">欢迎来到迅影网，一起分享电影给我们带来的快乐。</span>
      <div className="note note-right">
        <a className="save-website" href="javascript:alert('快捷键Ctrl+D可以快速添加到收藏夹。');">Ctrl+D 加入收藏夹</a> - <a >保存到桌面</a>
      </div>
    </div>
  </div>;

export default Notification;
