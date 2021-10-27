import React, { CSSProperties } from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import { styles } from '../styles';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';

// SocialCard includes all the basic styles for light mode
// SocialCard includes all the basic styles for dark mode
// SocialCard is reusable component

// TODO:
//  - Fix: arrow in today
// - finish styling

const SocialCard = (props: ISocialCard) => {
  const {
    icon,
    iconTitle,
    interactions,
    todayStatistic,
    isFollowers,
    topLineColor,
    isIncreasedActivity,
  } = props;

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
      <div style={{ ...styles.cardBaseStyle, textAlign: 'center' }}>
        <div style={styleCard}>
          <img src={icon} style={{ marginRight: '3px' }} />
          <div
            style={{
              ...styles.textStyle.boldText,
              ...styles.textStyle.cardTitleText,
            }}
          >
            {iconTitle}
          </div>
        </div>
        <div style={{ fontWeight: 700, fontSize: '45px' }}>
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
          <img src={activityIcon} style={{ marginRight: '4px' }} />

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
  marginBottom: '10px',
  justifyContent: 'center',
};

const styleFollowersText: CSSProperties = {
  fontWeight: 700,
  fontSize: '14px',
  opacity: '40%',
  letterSpacing: '5px',
  marginBottom: '20px',
};

export interface ISocialCard {
  id: string;
  iconTitle: string;
  icon: any;
  interactions: number;
  todayStatistic: number;
  topLineColor: string;
  isIncreasedActivity: boolean;
  isFollowers?: boolean;
}
