import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { useTheme, Theme } from '../../context/ThemeContext';

type TodayCardTitleType =
  | 'Page Views'
  | 'Likes'
  | 'Retweets'
  | 'Profile Views'
  | 'Total Views';

export interface ITodayCard {
  id: string;
  title: TodayCardTitleType;
  icon: any;
  interactions: number;
  percentage: number;
  isIncreasedActivity: boolean;
}

const TodayCard = ({
  title,
  interactions,
  icon,
  percentage,
  isIncreasedActivity,
}: ITodayCard) => {
  const { theme } = useTheme();

  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  const activityIcon = isIncreasedActivity ? IconUp : IconDown;

  return (
    <div>
      <div>
        <div className="title__todayCard">{title}</div>
        <div>{socialInteractions}</div>
      </div>

      <div>
        <div>
          <img src={icon} />
        </div>

        <div>
          <div>
            <img
              src={activityIcon}
              style={{ marginRight: '4px', marginBottom: '5px' }}
            />
          </div>
          <div>{`${percentage.toString()}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
