import React from 'react';

// SocialCard includes all the basic styles for light mode
// SocialCard includes all the basic styles for dark mode
// SocialCard is reusable component

// TODO:
//  - add increment or decrement sign to today's number
//  - add style top line

interface ISocialCard {
  iconText: string;
  iconSrc?: any;
  followersNumber: number;
  isFollowers?: boolean;
  todayNumber: number;
}

const SocialCard = (props: ISocialCard) => {
  const { iconSrc, iconText, followersNumber, todayNumber, isFollowers } =
    props;

  const isFollowersCheck = isFollowers ?? true;
  const followersText = isFollowersCheck ? 'FOLLOWERS' : 'SUBSCRIBERS';

  return (
    <div>
      <div>
        {iconText}
        <img src={iconSrc} />
      </div>
      <div>{followersNumber?.toString()}</div>
      <div>{followersText}</div>
      <div>{`${todayNumber?.toString()} Today`}</div>
    </div>
  );
};

export default SocialCard;
