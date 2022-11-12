import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
  const { user } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: ' Join the Early Bird list & get 30% off our 8-Week Design Systems Course with Dan Mall, starting February',
      name: 'Olivia Williams',
      userId: 1,
      profilePic:
        'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c',
    },
    {
      id: 2,
      desc: ' Join the Early Bird list & get 30% off our 8-Week Design Systems Course with Dan Mall, starting February',
      name: 'Olivia Williams',
      userId: 2,
      profilePic:
        'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c',
    },
  ];

  return (
    <div className='container-comments'>
      <div className='comment-write'>
        <img src={user.profilePic} alt='' />
        <input type='text' placeholder='Write a comment' />
        <button className='btn btn-send'>Send</button>
      </div>
      {comments.map((comment) => (
        <div className='comment-box'>
          <img src={comment.profilePic} alt='' />
          <div className='comment-info'>
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
