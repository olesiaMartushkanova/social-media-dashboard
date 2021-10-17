import React, { CSSProperties } from 'react';
import SocialCard, { ISocialCard } from './components/SocialCard/SocialCard';
import TodayCard from './components/TodayCard/TodayCard';
import IconFacebook from './images/icon-facebook.svg';
import IconTwitter from './images/icon-twitter.svg';
import IconInstagram from './images/icon-instagram.svg';
import IconYoutube from './images/icon-youtube.svg';

// Main App component
// App component includes all Social Dashboard components

// TODO for App:
// 1. Add here Switch component
// 2. Add Redux Provide here
// 4. Map Today Card components

// TODO: general
// 1. Create Switch component
// 2. Install React-Redux
// 3. Set up Redux store
// 4. Set up reducer for switching dark/light mode

// 5. Add styles here

const SOCIAL_CARDS: Array<ISocialCard> = [
  {
    id: 'facebook-social-card',
    iconTitle: '@nathanf',
    interactions: 1987,
    todayStatistic: 12,
    icon: IconFacebook,
    isFollowers: true,
  },
  {
    id: 'twitter-social-card',
    iconTitle: '@nathanf',
    interactions: 1044,
    todayStatistic: 99,
    icon: IconTwitter,
    isFollowers: true,
  },
  {
    id: 'instagram-social-card',
    iconTitle: '@realnathanf',
    // TODO: add 'K' to interactions here
    interactions: 11,
    todayStatistic: 99,
    icon: IconInstagram,
    isFollowers: true,
  },
  {
    id: 'youtube-social-card',
    iconTitle: 'Nathan F.',
    interactions: 8239,
    todayStatistic: 144,
    icon: IconYoutube,
    isFollowers: false,
  },
];

const App = () => {
  return (
    <div>
      <div>
        <div>Social Media Dashboard</div>
        <div>Total Followers: 23,004</div>
      </div>

      <div style={styleSocialCards}>
        {SOCIAL_CARDS.map((card) => (
          <li key={card.id}>
            <SocialCard
              id={card.id}
              iconTitle={card.iconTitle}
              interactions={card.interactions}
              todayStatistic={card.todayStatistic}
              icon={card.icon}
              isFollowers={card.isFollowers}
            />
          </li>
        ))}
      </div>

      <div>Overview - Today</div>
      {/* <TodayCard
        title='Page Views'
        icon={IconFacebook}
        interactions={87}
        percentage={3}
        isIncreased={true}
      /> */}
    </div>
  );
};

export default App;

const styleSocialCards: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  listStyleType: 'none',
};
