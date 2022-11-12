import React from 'react';
import './posts.scss';
import Post from '../post/Post';

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: 'Sean Jee',
      userId: 1,
      profilePic:
        'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c',
      desc: "Hi Dribble! I'm sharing with you a little refresh for our beloved Social Network. Press L to give love!",
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/cala-w6ftFbPCs9I-unsplash.jpg?alt=media&token=31b85772-d18b-4b3d-8337-9265a9f1c299',
    },
    {
      id: 2,
      name: 'Gorden Crack',
      userId: 1,
      profilePic:
        'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c',
      desc: "Hi Dribble! I'm sharing with you a little refresh for our beloved Social Network. Press L to give love!",
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/cala-w6ftFbPCs9I-unsplash.jpg?alt=media&token=31b85772-d18b-4b3d-8337-9265a9f1c299',
    },
    {
      id: 3,
      name: 'Musk Elephant',
      userId: 1,
      profilePic:
        'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c',
      desc: "Hi Dribble! I'm sharing with you a little refresh for our beloved Social Network. Press L to give love!",
      img: 'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/cala-w6ftFbPCs9I-unsplash.jpg?alt=media&token=31b85772-d18b-4b3d-8337-9265a9f1c299',
    },
  ];
  return (
    <div className='container-posts'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
