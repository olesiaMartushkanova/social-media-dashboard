import React from 'react';

// SocialCard includes all the basic styles for light mode
// SocialCard includes all the basic styles for dark mode
// SocialCard is reusable component

// TODO:
//  - add increment or decrement sign to today's number
//  - add style top line

const SocialCard = (props: ISocialCard) => {
  const { icon, iconTitle, interactions, todayStatistic, isFollowers } = props;

  const isFollowersCheck = isFollowers ?? true;
  const followersText = isFollowersCheck ? 'FOLLOWERS' : 'SUBSCRIBERS';

  return (
    <div>
      <div>
        {iconTitle}
        <img src={icon} />
      </div>
      <div>{interactions?.toString()}</div>
      <div>{followersText}</div>
      <div>{`${todayStatistic?.toString()} Today`}</div>
    </div>
  );
};

export default SocialCard;

export interface ISocialCard {
  iconTitle: string;
  icon: any;
  interactions: number;
  isFollowers: boolean;
  todayStatistic: number;
}
