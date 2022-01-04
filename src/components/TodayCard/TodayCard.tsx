import React from 'react';
import classnames from 'classnames';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { ITheme } from '../../utils/types';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import Card from '../Base/Card/Card';
import styles from './TodayCard.module.scss';

type TodayCardTitleType =
  | 'Page Views'
  | 'Likes'
  | 'Retweets'
  | 'Profile Views'
  | 'Total Views';

export interface ITodayCard extends ITheme {
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
  theme,
}: ITodayCard) => {
  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  const activityIcon = isIncreasedActivity ? IconUp : IconDown;

  return (
    <Card theme={theme} className={styles.mainContentContainer}>
      <div>
        <div>{title}</div>
        <div>{socialInteractions}</div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <div>
          <img src={icon} />
        </div>

        <div className={styles.activityContainer}>
          <div>
            <img className={styles.activityIcon} src={activityIcon} />
          </div>
          <div>{`${percentage.toString()}%`}</div>
        </div>
      </div>
    </Card>
  );
};

export default TodayCard;
