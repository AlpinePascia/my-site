import React, { useState } from 'react';
import profilePic from '../../media/profile-pic.jpeg';
import './ProfileImg.scss';

const ProfileImg = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="ProfileImgContainer">
      <img className={`ProfileImg${isFullScreen ? ' full-screen' : ''}`}
        src={profilePic} alt="Alex Xodov"
        onClick={() => setIsFullScreen(f => !f)}
      />
    </div>
  );
};

export default ProfileImg;
