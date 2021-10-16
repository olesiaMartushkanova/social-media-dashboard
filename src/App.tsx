import React from 'react';
import SocialCard from './components/SocialCard/SocialCard';
import TodayCard from './components/TodayCard/TodayCard';
import MyImage from './images/icon-facebook.svg';

// Main App component
// App component includes all Social Dashboard components

// TODO for App:
// 1. Add here Switch component
// 2. Add Redux Provide here
// 3. Map Social Card components
// 4. Map Today Card components

// TODO: general
// 1. Create Switch component
// 2. Install React-Redux
// 3. Set up Redux store
// 4. Set up reducer for switching dark/light mode

const App = () => {
  return (
    <div>
      <div>
        <div>Social Media Dashboard</div>
        <div>Total Followers: 23,004</div>
      </div>

      <div>
        <SocialCard
          iconText='@nathanf'
          followersNumber={1987}
          todayNumber={12}
          iconSrc={MyImage}
        />
      </div>

      <div>Overview - Today</div>
      <TodayCard />
    </div>
  );
};

export default App;
