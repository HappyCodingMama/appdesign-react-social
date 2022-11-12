import React from 'react';
import './rightbar.scss';

const Rightbar = () => {
  return (
    <div className='container-rightbar'>
      <div className='rightbar-box'>
        <div className='rightbar-item'>
          <span>My Community</span>
          <div className='rightbar-user'>
            <div className='rightbar-info-img'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c'
                alt=''
              />
            </div>
            <div className='rightbar-info'>
              <p>Photographer</p>
              <span>138 posting</span>
            </div>
          </div>
          <div className='rightbar-user'>
            <div className='rightbar-info-img'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c'
                alt=''
              />
            </div>
            <div className='rightbar-info'>
              <p>Swimming Club</p>
              <span>25 posting</span>
            </div>
          </div>
          <div className='rightbar-user'>
            <div className='rightbar-info-img'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c'
                alt=''
              />
            </div>
            <div className='rightbar-info'>
              <p>Interior Design</p>
              <span>70 posting</span>
            </div>
          </div>
          <button className='btn-line btn-follow'>See All</button>
        </div>
        <hr />
        <div className='rightbar-item'>
          <span>Suggested Page</span>
          <div className='rightbar-user'>
            <div className='rightbar-info-img'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c'
                alt=''
              />
            </div>
            <div className='rightbar-info'>
              <p>Photographer</p>
              <span>138 posting</span>
            </div>
          </div>
          <div className='rightbar-post-img'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c'
              alt=''
            />
          </div>
          <button className='btn-line btn-follow'>See All</button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
