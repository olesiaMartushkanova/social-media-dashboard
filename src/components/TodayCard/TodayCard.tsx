import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';

// TodayCard includes all the basic styles for light mode
// TodayCard includes all the basic styles for dark mode
// TodayCard is reusable component

// TODO:
// - add the ability to add 'K' to interactions number

const TodayCard = (props: ITodayCard) => {
  const { title, interactions, icon, percentage, isIncreased } = props;

  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  return (
    <div>
      <div>{title}</div>
      <img src={icon} />
      <div>{socialInteractions}</div>
      <div>
        <div>{isIncreased}</div>
        <div>{`${percentage.toString()}%`}</div>
      </div>
    </div>
  );
};

export default TodayCard;

export interface ITodayCard {
  id: string;
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
