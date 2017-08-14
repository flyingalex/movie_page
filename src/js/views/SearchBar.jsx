import React from 'react';

const SearchBar = () =>
  <div className="container search-wrapper">
    <a className="logo" href="http://www.xunyingwang.com/">
      <img src="assets/images/logo.png" alt="logo" />
    </a>
    <div className="pull-right">
      <form className="pull-right navbar-form" action="http://www.xunyingwang.com/search">
        <div className="form-group">
          <input type="text" className="form-control" name="q" value="" placeholder="请输入电影名字" />
        </div>
        <button type="submit" className="button">搜索</button>
      </form>
      <div className="header-hot">
        <a href="http://www.xunyingwang.com/movie/215568.html">异星觉醒</a><a href="http://www.xunyingwang.com/movie/217068.html">速度与激情8</a><a href="http://www.xunyingwang.com/movie/3906.html">神奇女侠</a><a href="http://www.xunyingwang.com/movie/206143.html">摔跤吧爸爸</a><a href="http://www.xunyingwang.com/movie/428013.html">变形金刚5</a>
      </div>
    </div>
  </div>;

export default SearchBar;
