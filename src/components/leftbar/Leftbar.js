import React from 'react';
import { BsPersonPlus } from 'react-icons/bs';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiHealthBookLine } from 'react-icons/ri';
import { RiLayoutGridLine } from 'react-icons/ri';
import { BiNews } from 'react-icons/bi';
import { ImFilesEmpty } from 'react-icons/im';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './leftbar.scss';

const Leftbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='container-leftbar'>
      <div className='leftbar-box'>
        <div className='leftbar-menu'>
          <div className='leftbar-user'>
            <img src={user.profilePic} alt='' />
            <span>{user.name}</span>
          </div>

          <div className='leftbar-item'>
            <BsPersonPlus className='leftbar-icon' />
            <span>Friends</span>
          </div>
          <div className='leftbar-item'>
            <MdOutlineEventAvailable className='leftbar-icon' />
            <span>Events</span>
          </div>
          <div className='leftbar-item'>
            <RiVideoLine className='leftbar-icon' />
            <span>Watch</span>
          </div>
          <div className='leftbar-item'>
            <MdOutlineInsertPhoto className='leftbar-icon' />
            <span>Photos</span>
          </div>
          <div className='leftbar-item'>
            <ImFilesEmpty className='leftbar-icon' />
            <span>Files</span>
          </div>
        </div>
        <hr />
        <div className='leftbar-menu'>
          <span>Shortcuts</span>
          <div className='leftbar-item'>
            <BiMessageSquareDetail className='leftbar-icon' />
            <span>Messages</span>
          </div>
          <div className='leftbar-item'>
            <RiHealthBookLine className='leftbar-icon' />
            <span>Health</span>
          </div>
          <div className='leftbar-item'>
            <RiLayoutGridLine className='leftbar-icon' />
            <span>Gallery</span>
          </div>
          <div className='leftbar-item'>
            <BiNews className='leftbar-icon' />
            <span>News</span>
          </div>
        </div>
        <hr />
        <div className='leftbar-menu'>
          <span>Pages You Like</span>
          <div className='leftbar-item'>
            <MdOutlineEventAvailable className='leftbar-icon' />
            <span>Triathelon</span>
          </div>
          <div className='leftbar-item'>
            <RiVideoLine className='leftbar-icon' />
            <span>Swimming Club</span>
          </div>
          <div className='leftbar-item'>
            <MdOutlineInsertPhoto className='leftbar-icon' />
            <span>UI / UX Community</span>
          </div>
          <div className='leftbar-item'>
            <ImFilesEmpty className='leftbar-icon' />
            <span>Web Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
