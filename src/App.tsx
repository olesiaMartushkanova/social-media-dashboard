import React, { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import SocialCard from './components/SocialCard/SocialCard';
import SwitchToggle from './components/SwitchToggle/SwitchToggle';
import TodayCard from './components/TodayCard/TodayCard';
import { Theme, ThemeContext } from './context/ThemeContext';
import { SOCIAL_CARDS } from './data/socialCards';
import { TODAY_CARDS_BOTTOM, TODAY_CARDS_TOP } from './data/todayCards';
import styles from './App.module.scss';
import classnames from 'classnames';

const App = () => {
  const [theme, setTheme] = React.useState(Theme.Light);

  const handleOnToggle = () =>
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  useEffect(() => {
    return theme === Theme.Dark
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={classnames(styles.appContainer, {
          [styles.appDark]: theme === Theme.Dark,
        })}
      >
        <div>
          <div className={styles.socialMediaContainer}>
            <div>Social Media Dashboard</div>
            <div style={{ marginLeft: 'auto', marginRight: '70px' }}>
              <SwitchToggle onToggle={handleOnToggle} theme={theme} />
            </div>
          </div>

          <div>Total Followers: 23,004</div>

          <div className={styles.cardsContainer}>
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

          <div>Overview - Today</div>

          <div className={classnames(styles.cardsContainer, styles.topCards)}>
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

          <div className={styles.cardsContainer}>
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
