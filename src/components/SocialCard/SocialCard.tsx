import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';

// SocialCard includes all the basic styles for light mode
// SocialCard includes all the basic styles for dark mode
// SocialCard is reusable component

// TODO:
//  - add increment or decrement sign to today's number
//  - add style top line

const SocialCard = (props: ISocialCard) => {
  const { icon, iconTitle, interactions, todayStatistic, isFollowers } = props;

  const followersText = isFollowers ? 'FOLLOWERS' : 'SUBSCRIBERS';
  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  return (
    <div
      style={{
        backgroundColor: 'hsl(227, 47%, 96%)',
        boxSizing: 'content-box',
        padding: '45px',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '10px',
        }}>
        <img src={icon} style={{ marginRight: '3px' }} />
        <div>{iconTitle}</div>
      </div>
      <div style={{ fontWeight: 700, fontSize: '45px' }}>
        {socialInteractions}
      </div>
      <div style={{ fontWeight: 700, fontSize: '20px' }}>{followersText}</div>
      <div>{`${todayStatistic.toString()} Today`}</div>
    </div>
  );
};

export default SocialCard;

export interface ISocialCard {
  id: string;
  iconTitle: string;
  icon: any;
  interactions: number;
  todayStatistic: number;
  isFollowers?: boolean;
}
