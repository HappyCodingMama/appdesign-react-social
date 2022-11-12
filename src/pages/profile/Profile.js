import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Leftbar from '../../components/leftbar/Leftbar';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import Posts from '../../components/posts/Posts';
import './profile.scss';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='container-home'>
        <Leftbar />

        <div className='container-profile'>
          <div className='profile-images'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg?alt=media&token=a3d3ec4f-7d49-4717-aed8-54017cae1584'
              alt=''
              className='profile-cover'
            />
            <img
              src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/slav-romanov-BrEAp01_m5w-unsplash.jpg?alt=media&token=8306c41c-052b-453c-9229-5ca513e2188e'
              alt=''
              className='profilePic'
            />
          </div>
          <div className='profile-box'>
            <div className='profile-info'>
              <div className='profile-info-left'>
                <span>Olivia Williams</span>
                <p>
                  Untitled UI is the largest Figma UI kit and design system in
                  the world. Kickstart any project, save thousands of hours, and
                  level up as a designer.
                </p>
              </div>
              <div className='profile-info-right'>
                <div className='info-icons'>
                  <div className='btn-setting'>
                    <HiOutlineDotsHorizontal />
                  </div>
                  <button className='btn-follow'>follow</button>
                  <button className='btn-message'>message</button>
                </div>

                <div className='info-item'>
                  <div>
                    <span className='info-item-title'>Location</span>
                  </div>
                  <div className='info-item-content'>
                    <span>Vancouver, Canada</span>
                  </div>
                </div>
                <div className='info-item'>
                  <div>
                    <span className='info-item-title'>Website</span>
                  </div>
                  <div className='info-item-content'>
                    <span>oliviaqwer.com</span>
                    <FiArrowUpRight className='info-arrow' />
                  </div>
                </div>
                <div className='info-item'>
                  <div>
                    <span className='info-item-title'>Email</span>
                  </div>
                  <div className='info-item-content'>
                    <span>olivia@qwermail.com</span>
                    <FiArrowUpRight className='info-arrow' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-profile-posts'>
            <Posts />
          </div>
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Profile;
