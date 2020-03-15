import React from 'react';
import classes from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <img src="images/profile.png" />
      </div>
      <div className={classes.item}>Profile</div>

      <div className={classes.item}>
        <img src="images/messages.png" />
      </div>
      <div className={classes.item}>Messages</div>

      <div className={classes.item}>
        <img src="images/news.png" />
      </div>
      <div className={classes.item}>News</div>

      <div className={classes.item}>
        <img src="images/music.png" />
      </div>
      <div className={classes.item}>Music</div>

      <div className={classes.item}>
        <img src="images/settings.png" />
      </div>
      <div className={classes.item}>Settings</div>
    </nav>
  );
};

export default Navbar;
