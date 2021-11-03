import React, { CSSProperties } from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import { styles } from '../styles';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { Theme, useTheme } from '../../context/ThemeContext';

export interface ISocialCard {
  id: string;
  iconTitle: string;
  icon: any;
  interactions: number;
  todayStatistic: number;
  topLineColor: string;
  isIncreasedActivity: boolean;
  isFollowers: boolean;
}

const SocialCard = ({
  icon,
  iconTitle,
  interactions,
  todayStatistic,
  isFollowers,
  topLineColor,
  isIncreasedActivity,
}: ISocialCard) => {
  const { theme } = useTheme();

  const socialCardThemeStyles =
    theme === Theme.Dark
      ? styles.darkThemeCardStyles
      : styles.lightThemeCardStyles;

  const followersText = isFollowers ? 'FOLLOWERS' : 'SUBSCRIBERS';
  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  const activityTextColor = isIncreasedActivity
    ? styles.primaryColors.limeGreen
    : styles.primaryColors.brightRed;

  const activityIcon = isIncreasedActivity ? IconUp : IconDown;

  return (
    <>
      <div style={{ height: '4px', background: topLineColor }} />
      <div
        style={{
          ...styles.cardBaseStyle,
          backgroundColor: socialCardThemeStyles.topCardBackground,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: socialCardThemeStyles.textColor,
        }}
      >
        <div style={styleCard}>
          <img src={icon} style={{ marginRight: '4px' }} />
          <div
            style={{
              ...styles.textStyle.boldText,
              ...styles.textStyle.cardTitleText,
            }}
          >
            {iconTitle}
          </div>
        </div>
        <div style={{ ...styles.textStyle.boldText, fontSize: '45px' }}>
          {socialInteractions}
        </div>
        <div style={styleFollowersText}>{followersText}</div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
              color: activityTextColor,
              fontSize: '11px',
            }}
          >
            {`${todayStatistic.toString()} Today`}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;

const styleCard: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const styleFollowersText: CSSProperties = {
  ...styles.textStyle.boldText,
  fontSize: '14px',
  opacity: '40%',
  letterSpacing: '5px',
  marginBottom: '20px',
};
