import React, { useState } from 'react';
import profilePic from '../../media/profile-pic-2.jpeg';
import './ProfileImg.scss';
import FadeInOut from '../../transitions/FadeInOut';

const ProfileImg = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="ProfileImgContainer">
      <img className="ProfileImg"
        src={profilePic} alt="Alex Xodov"
        onClick={() => setIsFullScreen(true)}
      />
      <FadeInOut toggle={isFullScreen}
        className="FullScreenContainer"
        onClick={() => setIsFullScreen(false)}>
        <img className="ProfileImg"
          src={profilePic} alt="Alex Xodov"
        />
      </FadeInOut>
    </div>
  );
};

export default ProfileImg;
