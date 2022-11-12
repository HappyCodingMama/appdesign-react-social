import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { BsBookmarkHeart } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

import Comments from '../comments/Comments';

import './post.scss';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className='container-post'>
      <div className='post-box'>
        <div className='post-user'>
          <div className='post-userinfo'>
            <img src={post.profilePic} alt='' />
            <div className='post-details'>
              <Link to={`/profile/${post.userId}`}>
                <span className='post-name'>{post.name}</span>
              </Link>
              <span className='post-date'>1 min ago</span>
            </div>
          </div>
          <BsThreeDots />
        </div>
        <div className='post-content'>
          <p>{post.desc}</p>
          <img src={post.img} alt='' />
        </div>
        <div className='post-info'>
          <div className='post-item'>
            {liked ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />}6 Likes
          </div>
          <div
            className='post-item'
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <FaCommentDots />
            Comments
          </div>
          <div className='post-item'>
            <FiShare />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
