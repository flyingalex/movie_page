import React from 'react';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.css';

import Notification from './Notification';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Slider from './Slider';
import Recommendation from './Recommendation';
import LatestMovie from './LatestMovie';
import Forum from './Forum';
import Box from './IndexBox';
import Footer from './Footer';

const App = () =>
  <div>
    <header>
      <Notification />
      <SearchBar />
      <NavBar />
    </header>
    <Slider />
    <Recommendation />
    <LatestMovie />
    <Forum />
    <Box items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    <Box items={[1, 2, 3, 4, 5]} />
    <Box items={[1, 2, 3, 4, 5]} />
    <div className="container">
      <a href="http://www.xunyingwang.com/movie/" className="btn btn-success btn-block" >更多精彩电影&gt;&gt;</a>
    </div>
    <Footer />
  </div>;
export default App;
