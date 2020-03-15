import React from 'react';
import classes from './profile.module.css';
import Post from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div className={classes.item}>ava + description</div>
      <Post />
    </div>
  );
};

export default Profile;
