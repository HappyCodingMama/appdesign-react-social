import React from 'react';
import './shorts.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Shorts = () => {
  const { user } = useContext(AuthContext);
  const shorts = [
    {
      id: 1,
      name: 'Sean Jee',
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alexis-chloe-dD75iU5UAU4-unsplash.jpg?alt=media&token=287bd783-a32f-4aef-b8ad-0234cdda6ebc',
    },
    {
      id: 2,
      name: 'Olivia Williams',
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/lauren-mancke-DpphPG9ENsI-unsplash.jpg?alt=media&token=f92ece4b-8912-4966-ad67-9d3595974b5e',
    },
    {
      id: 3,
      name: 'Luke Jee',
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/kev-costello-uSXKAQK_Dco-unsplash.jpg?alt=media&token=ab0d954f-7061-4142-afb3-adb30ab4701a',
    },
    {
      id: 4,
      name: 'Sara Kal',
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/cala-w6ftFbPCs9I-unsplash.jpg?alt=media&token=31b85772-d18b-4b3d-8337-9265a9f1c299',
    },
  ];

  return (
    <div className='container-shorts'>
      <div className='shorts-box'>
        <img src={user.profilePic} alt='' />
        <span>{user.name}</span>
        <button>+</button>
      </div>
      {shorts.map((short) => (
        <div className='shorts-box' key={shorts.id}>
          <img src={short.img} alt='' />
          <span>{short.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
