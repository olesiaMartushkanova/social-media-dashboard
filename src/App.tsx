import React, { CSSProperties } from 'react';
import SocialCard from './components/SocialCard/SocialCard';
import { styles } from './components/styles';
import TodayCard from './components/TodayCard/TodayCard';
import { SOCIAL_CARDS } from './data/socialCards';
import { TODAY_CARDS_BOTTOM, TODAY_CARDS_TOP } from './data/todayCards';

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
// 6. Organize styles better

const App = () => (
  <div
    style={{
      ...styleAppGeneral,
      ...styleAppDesktop,
    }}
  >
    <div>
      <div
        style={{
          ...styles.textStyle.boldText,
          fontSize: '28px',
          marginBottom: '3px',
        }}
      >
        Social Media Dashboard
      </div>
      <div
        style={{
          ...styles.textStyle.boldText,
          fontSize: '14px',
          opacity: '65%',
          marginBottom: '40px',
        }}
      >
        Total Followers: 23,004
      </div>
    </div>

    <div style={styleCardsGeneral}>
      {SOCIAL_CARDS.map((card) => (
        <li key={card.id}>
          <SocialCard
            id={card.id}
            iconTitle={card.iconTitle}
            interactions={card.interactions}
            todayStatistic={card.todayStatistic}
            icon={card.icon}
            topLineColor={card.topLineColor}
            isFollowers={card.isFollowers}
            isIncreasedActivity={card.isIncreasedActivity}
          />
        </li>
      ))}
    </div>

    <div
      style={{
        ...styles.textStyle.boldText,
        fontSize: '20px',
        opacity: '60%',
        marginBottom: '40px',
        marginTop: '30px',
      }}
    >
      Overview - Today
    </div>

    <div style={{ ...styleCardsGeneral, ...styleTodaysCardsTop }}>
      {TODAY_CARDS_TOP.map((card) => (
        <li key={card.id}>
          <TodayCard
            id={card.id}
            title={card.title}
            icon={card.icon}
            interactions={card.interactions}
            percentage={card.percentage}
            isIncreasedActivity={card.isIncreasedActivity}
          />
        </li>
      ))}
    </div>

    <div style={styleCardsGeneral}>
      {TODAY_CARDS_BOTTOM.map((card) => (
        <li key={card.id}>
          <TodayCard
            id={card.id}
            title={card.title}
            icon={card.icon}
            interactions={card.interactions}
            percentage={card.percentage}
            isIncreasedActivity={card.isIncreasedActivity}
          />
        </li>
      ))}
    </div>
  </div>
);

export default App;

const styleAppGeneral: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Inter, sans-serif',
};

const styleAppDesktop: CSSProperties = {
  marginLeft: '70px',
  marginTop: '40px',
  marginBottom: '20px',
};

const styleCardsGeneral: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  listStyleType: 'none',
};

const styleTodaysCardsTop: CSSProperties = {
  marginBottom: '15px',
};
