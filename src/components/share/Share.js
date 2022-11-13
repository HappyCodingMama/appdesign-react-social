import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './share.scss';
import { FiImage } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { BiPurchaseTagAlt } from 'react-icons/bi';

const Share = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='container-share'>
      <div className='share-box'>
        <div className='share-top'>
          <img src={user.profilePic} alt='' />
          <input
            type='text'
            placeholder={`What's on your mind, ${user.username}?`}
          />
        </div>
        <div className='share-bottom'>
          <div className='share-items'>
            <div className='share-icons'>
              <div className='share-icon'>
                <FiImage />
                <span className='share-content'>Add Image</span>
              </div>
              <div className='share-icon'>
                <GrLocation />
                <span className='share-content'>Location</span>
              </div>
              <div className='share-icon'>
                <BiPurchaseTagAlt />
                <span className='share-content'>Tag</span>
              </div>
            </div>
            <div>
              <button className='btn-share'>share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
