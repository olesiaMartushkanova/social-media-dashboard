import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import { styles } from '../styles';

// TodayCard includes all the basic styles for light mode
// TodayCard includes all the basic styles for dark mode
// TodayCard is reusable component

// TODO:
// - finish styling

const TodayCard = (props: ITodayCard) => {
  const {
    title, interactions, icon, percentage, isIncreased,
  } = props;

  const socialInteractions = convertNumberToShortThousands(interactions).toString();

  return (
    <div
      style={{
        ...styles.cardBaseStyle,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '25px' }}>{title}</div>
        <img src={icon} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
        <div style={{ marginRight: '25px' }}>{socialInteractions}</div>

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
