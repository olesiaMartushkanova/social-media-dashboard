import React, { useEffect } from 'react';
import classnames from 'classnames';
import Footer from './components/Footer/Footer';
import SocialCard from './components/SocialCard/SocialCard';
import SwitchToggle from './components/SwitchToggle/SwitchToggle';
import TodayCard from './components/TodayCard/TodayCard';
import { Theme, ThemeContext } from './context/ThemeContext';
import { SOCIAL_CARDS } from './data/socialCards';
import { TODAY_CARDS_BOTTOM, TODAY_CARDS_TOP } from './data/todayCards';
import styles from './App.module.scss';
import './App.module.scss';

const App = () => {
  const [theme, setTheme] = React.useState(Theme.Light);

  const handleOnToggle = () =>
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  const switchToggleLabelText =
    theme === Theme.Light ? 'Dark Mode' : 'Light Mode';

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === Theme.Dark ? 'hsl(230, 17%, 14%)' : 'hsl(0, 0%, 100%)';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={classnames(styles.appContainer)}>
        <div className={styles.socialMediaContainer}>
          <div
            className={classnames(styles.mainTitle, {
              [styles.mainTitleDark]: theme === Theme.Dark,
            })}
          >
            Social Media Dashboard
          </div>

          <div
            className={classnames(styles.totalFollowersText, {
              [styles.darkSubtitle]: theme === Theme.Dark,
            })}
          >
            Total Followers: 23,004
          </div>

          <hr
            className={classnames(styles.hr, {
              [styles.hrDark]: theme === Theme.Dark,
            })}
          />

          <div className={styles.toggleContainer}>
            <label
              className={classnames(styles.switchToggleLabel, {
                [styles.darkSubtitle]: theme === Theme.Dark,
              })}
            >
              {switchToggleLabelText}
            </label>
            <SwitchToggle onToggle={handleOnToggle} theme={theme} />
          </div>

          <ul className={styles.cardsContainer}>
            {SOCIAL_CARDS.map((card) => (
              <li key={card.id}>
                <SocialCard
                  className={styles.card}
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
          </ul>

          <div
            className={classnames(styles.overviewTitle, {
              [styles.darkSubtitle]: theme === Theme.Dark,
            })}
          >
            Overview - Today
          </div>

          <ul
            className={classnames(styles.cardsContainer, styles.cardsTodayTop)}
          >
            {TODAY_CARDS_TOP.map((card) => (
              <li key={card.id}>
                <TodayCard
                  id={card.id}
                  title={card.title}
                  icon={card.icon}
                  interactions={card.interactions}
                  percentage={card.percentage}
                  isIncreasedActivity={card.isIncreasedActivity}
                  theme={theme}
                />
              </li>
            ))}
          </ul>

          <ul className={styles.cardsContainer}>
            {TODAY_CARDS_BOTTOM.map((card) => (
              <li key={card.id}>
                <TodayCard
                  id={card.id}
                  title={card.title}
                  icon={card.icon}
                  interactions={card.interactions}
                  percentage={card.percentage}
                  isIncreasedActivity={card.isIncreasedActivity}
                  theme={theme}
                />
              </li>
            ))}
          </ul>
        </div>
        <Footer theme={theme} className={styles.footer} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
