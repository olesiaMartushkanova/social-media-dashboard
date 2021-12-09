import React, { CSSProperties } from 'react';
import './App.module.scss';
import Footer from './components/Footer/Footer';
import SocialCard from './components/SocialCard/SocialCard';
import { styles } from './components/styles';
import SwitchToggle from './components/SwitchToggle/SwitchToggle';
import TodayCard from './components/TodayCard/TodayCard';
import { Theme, ThemeContext } from './context/ThemeContext';
import { SOCIAL_CARDS } from './data/socialCards';
import { TODAY_CARDS_BOTTOM, TODAY_CARDS_TOP } from './data/todayCards';

const App = () => {
  const [theme, setTheme] = React.useState(Theme.Light);
  const appThemeStyles = theme === Theme.Dark ? darkTheme : lightTheme;

  const handleOnToggle = () =>
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          ...styleAppGeneral,
          backgroundColor: appThemeStyles.backgroundColor,
        }}
      >
        <div
          style={{
            ...styleAppDesktop,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                ...styles.textStyle.boldText,
                color: appThemeStyles.titleColor,
                fontSize: '28px',
                marginBottom: '3px',
              }}
            >
              Social Media Dashboard
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '70px' }}>
              <SwitchToggle onToggle={handleOnToggle} />
            </div>
          </div>

          <div
            style={{
              ...styles.textStyle.boldText,
              fontSize: '14px',
              opacity: '85%',
              marginBottom: '40px',
              color: appThemeStyles.subTitleColor,
            }}
          >
            Total Followers: 23,004
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
                  theme={theme}
                />
              </li>
            ))}
          </div>

          <div
            style={{
              ...styles.textStyle.boldText,
              fontSize: '20px',
              opacity: '85%',
              marginBottom: '40px',
              marginTop: '30px',
              color: appThemeStyles.subTitleColor,
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
        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

const darkTheme = {
  backgroundColor: 'hsl(230, 17%, 14%)',
  subTitleColor: styles.primaryColors.white,
  titleColor: styles.primaryColors.white,
};

const lightTheme = {
  backgroundColor: ' hsl(0, 0%, 100%)',
  subTitleColor: styles.primaryColors.darkGreyishBlueText,
  titleColor: styles.primaryColors.darkPageBG,
};

const styleAppGeneral: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Inter, sans-serif',
  width: '100vw',
  height: '100vh',
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
