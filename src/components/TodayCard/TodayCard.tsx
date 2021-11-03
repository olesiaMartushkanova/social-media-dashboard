import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import { styles } from '../styles';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { useTheme, Theme } from '../../context/ThemeContext';

type TodayCardTitleType =
  | 'Page Views'
  | 'Likes'
  | 'Retweets'
  | 'Profile Views'
  | 'Total Views';

export interface ITodayCard {
  id: string;
  title: TodayCardTitleType;
  icon: any;
  interactions: number;
  percentage: number;
  isIncreasedActivity: boolean;
}

const TodayCard = ({
  title,
  interactions,
  icon,
  percentage,
  isIncreasedActivity,
}: ITodayCard) => {
  const { theme } = useTheme();

  const todayCardThemeStyles =
    theme === Theme.Dark
      ? styles.darkThemeCardStyles
      : styles.lightThemeCardStyles;

  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  const activityTextColor = isIncreasedActivity
    ? styles.primaryColors.limeGreen
    : styles.primaryColors.brightRed;

  const activityIcon = isIncreasedActivity ? IconUp : IconDown;

  return (
    <div
      style={{
        ...styles.cardBaseStyle,
        backgroundColor: todayCardThemeStyles.topCardBackground,
        color: todayCardThemeStyles.textColor,
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 'auto',
        }}
      >
        <div
          className="title__todayCard"
          style={{
            ...styles.textStyle.boldText,
            ...styles.textStyle.cardTitleText,
            marginBottom: '30px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            ...styles.textStyle.boldText,
            fontSize: '28px',
          }}
        >
          {socialInteractions}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 'auto',
        }}
      >
        <div style={{ marginBottom: '30px', marginLeft: 'auto' }}>
          <img src={icon} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10px',
            marginLeft: '10px',
          }}
        >
          <div>
            <img
              src={activityIcon}
              style={{ marginRight: '4px', marginBottom: '5px' }}
            />
          </div>
          <div
            style={{
              ...styles.textStyle.boldText,
              marginBottom: '1px',
              marginRight: '1px',
              color: activityTextColor,
              fontSize: '11px',
            }}
          >{`${percentage.toString()}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
