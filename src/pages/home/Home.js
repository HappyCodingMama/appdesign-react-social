import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Leftbar from '../../components/leftbar/Leftbar';
import './home.scss';
import Shorts from '../../components/shorts/Shorts';
import Posts from '../../components/posts/Posts';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container-home'>
        <Leftbar />
        <div className='home-contents'>
          <Shorts />
          <Posts />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
