import React from 'react';

const NavBar = () =>
  <nav className="navbar">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><a href="http://www.xunyingwang.com/">首页</a></li>
        <li><a href="http://www.xunyingwang.com/">电影</a></li>
        <li><a href="http://www.xunyingwang.com/">电视剧</a></li>
        <li><a href="http://www.xunyingwang.com/">交流圈</a></li>
        <li><a href="http://www.xunyingwang.com/" className="dropdown">排行榜<span className="caret" /></a></li>
      </ul>
      <div className="pull-right">
        <ul className="nav navbar-nav">
          <li><a href="http://www.xunyingwang.com/signup">注册</a></li>
          <li><a href="http://www.xunyingwang.com/signin">登录</a></li>
        </ul>
      </div>
    </div>
  </nav>;


export default NavBar;
