import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div> My posts</div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={classes.posts}>
            <Post message='Hey, I think it is good!' img="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"/>
            <Post message='Yes, absolutely.' img='https://animebest.org/uploads/posts/2018-12/1543853255_avatar-the-last-airbender.jpg'/>
        </div>
    </div>
  );
};

export default MyPosts;
