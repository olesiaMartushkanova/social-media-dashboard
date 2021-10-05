import React from 'react';

interface ISocialTile {
  iconText: string;
  iconSrc?: string;
  followersNumber: number;
  todayNumber: number;
  isFollowers?: boolean;
}

const SocialTile = (props: ISocialTile) => {
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

export default SocialTile;
