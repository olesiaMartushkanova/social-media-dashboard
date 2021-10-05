import React from 'react';
import SocialTile from './components/SocialTile/SocialTile';
// import { ReactComponent as MyImage } from './images/icon-facebook.svg';

const SocialDashboard = () => {
  return (
    <div>
      <div>
        <div>Social Media Dashboard</div>
        <div>Total Followers: 23,004</div>
      </div>

      <SocialTile
        iconText='@nathanf'
        followersNumber={1987}
        todayNumber={12}
        // iconSrc={MyImage}
      />
      <div>Overview</div>
      <div>Social sub-tiles here</div>
    </div>
  );
};

export default SocialDashboard;
