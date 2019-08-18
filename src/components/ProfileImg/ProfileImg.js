import React from 'react';
import profilePic from '../../media/profile-pic-2.jpeg';
import './ProfileImg.scss';

const ProfileImg = () => (
  <img className="ProfileImg" src={profilePic} alt="Alex Xodov" />
);

export default ProfileImg;
