import React, { CSSProperties } from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import { styles } from '../styles';

// SocialCard includes all the basic styles for light mode
// SocialCard includes all the basic styles for dark mode
// SocialCard is reusable component

// TODO:
//  - add increment or decrement sign to today's number
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
  const socialInteractions = convertNumberToShortThousands(interactions).toString();

  const activityTextColor = isIncreasedActivity
    ? 'hsl(163, 72%, 41%)'
    : 'hsl(356, 69%, 56%)';

  return (
    <>
      <div style={{ height: '4px', background: topLineColor }} />
      <div style={styles.cardBaseStyle}>
        <div style={styleCard}>
          <img src={icon} style={{ marginRight: '3px' }} />
          <div style={{ fontSize: '12px', fontWeight: 700, opacity: '65%' }}>
            {iconTitle}
          </div>
        </div>
        <div style={{ fontWeight: 700, fontSize: '45px' }}>
          {socialInteractions}
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: '14px',
            opacity: '40%',
            letterSpacing: '5px',
            marginBottom: '20px',
          }}
        >
          {followersText}
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: '12px',
            color: activityTextColor,
          }}
        >
          {`${todayStatistic.toString()} Today`}
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
