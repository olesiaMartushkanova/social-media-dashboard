import React from 'react';

// TodayCard includes all the basic styles for light mode
// TodayCard includes all the basic styles for dark mode
// TodayCard is reusable component

const TodayCard = (props: ITodayCard) => {
  const { title, interactions, icon, percentage, isIncreased } = props;

  return (
    <div>
      <div>{title}</div>
      <img src={icon} />
      <div>{interactions}</div>
      <div>
        <div>{isIncreased}</div>
        <div>{`${percentage.toString()}%`}</div>
      </div>
    </div>
  );
};

export default TodayCard;

interface ITodayCard {
  title: TodayCardTitleType;
  icon: any;
  interactions: number;
  percentage: number;
  isIncreased: boolean;
}

type TodayCardTitleType =
  | 'Page Views'
  | 'Likes'
  | 'Retweets'
  | 'Profile Views'
  | 'Total Views';
