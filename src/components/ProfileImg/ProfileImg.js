import React, { useState } from 'react';
import profilePic from '../../media/profile-pic-2.jpeg';
import { root, img, fullScreenContainer } from './ProfileImg.module.scss';
import FadeInOut from '../../transitions/FadeInOut';

const ProfileImg = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className={root}>
      <img className={img}
        src={profilePic} alt="Alex Xodov"
        onClick={() => setIsFullScreen(true)}
      />
      <FadeInOut toggle={isFullScreen}
        className={fullScreenContainer}
        onClick={() => setIsFullScreen(false)}>
        <img className={img}
          src={profilePic} alt="Alex Xodov"
        />
      </FadeInOut>
    </div>
  );
};

export default ProfileImg;
