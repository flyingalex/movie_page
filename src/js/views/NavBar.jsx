import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleDropDown() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><a href="http://www.xunyingwang.com/">首页</a></li>
            <li><a href="http://www.xunyingwang.com/">电影</a></li>
            <li><a href="http://www.xunyingwang.com/">电视剧</a></li>
            <li><a href="http://www.xunyingwang.com/">交流圈</a></li>
            <li className="dropdown">
              <a href="javascript:void(0)" onClick={this.toggleDropDown} className="dropdown">排行榜<span className="caret" /></a>
              <ul className="dropdown-menu" role="menu" style={{ display: this.state.display ? 'block' : '' }}>
                <li><a href="http://www.xunyingwang.com/movie/top250_douban">豆瓣TOP250</a></li>
                <li><a href="http://www.xunyingwang.com/movie/hotest">最近热门</a></li>
              </ul>
            </li>
          </ul>
          <div className="pull-right">
            <ul className="nav navbar-nav">
              <li><a href="http://www.xunyingwang.com/signup">注册</a></li>
              <li><a href="http://www.xunyingwang.com/signin">登录</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
