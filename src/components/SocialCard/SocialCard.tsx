import React from 'react';

// SocialCard includes all the basic styles for light mode
// SocialCard includes all the basic styles for dark mode
// SocialCard is reusable component

// TODO:
//  - add increment or decrement sign to today's number
//  - add style top line
// - add 'K' to interactions number

const SocialCard = (props: ISocialCard) => {
  const { icon, iconTitle, interactions, todayStatistic, isFollowers } = props;

  const followersText = isFollowers ? 'FOLLOWERS' : 'SUBSCRIBERS';

  return (
    <>
      <div>
        {iconTitle}
        <img src={icon} />
      </div>
      <div>{interactions.toString()}</div>
      <div>{followersText}</div>
      <div>{`${todayStatistic.toString()} Today`}</div>
    </>
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
