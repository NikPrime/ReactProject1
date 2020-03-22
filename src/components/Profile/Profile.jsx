import React from 'react';
import classes from './Profile.module.css';
import Post from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
  );
};

export default Profile;
