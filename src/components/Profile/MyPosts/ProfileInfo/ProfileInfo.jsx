import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
        <img
          src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"
          width="100%"
          height="100%"
        />
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
