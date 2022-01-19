import React from 'react';
import classnames from 'classnames';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { ITheme } from '../../utils/types';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import Card from '../Base/Card/Card';
import styles from './TodayCard.module.scss';
import { Theme } from '../../context/ThemeContext';

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
    <Card
      theme={theme}
      className={classnames(styles.mainContentContainer, styles.card)}
    >
      <div className={classnames(styles.column, styles.leftColumn)}>
        <div
          className={classnames(styles.title, {
            [styles.titleDark]: theme === Theme.Dark,
          })}
        >
          {title}
        </div>
        <div
          className={classnames(styles.socialInteraction, {
            [styles.socialInteractionDark]: theme === Theme.Dark,
          })}
        >
          {socialInteractions}
        </div>
      </div>

      <div className={classnames(styles.column, styles.rightColumn)}>
        <img
          className={styles.socialIcon}
          src={icon}
          alt={'Today card social icon'}
        />
        <div className={styles.activityContainer}>
          <div>
            <img
              className={styles.activityIcon}
              src={activityIcon}
              alt={'Today card activity icon'}
            />
          </div>
          <div
            className={classnames(
              styles.activityNumber,
              isIncreasedActivity
                ? styles.activityNumberIsIncreased
                : styles.activityNumberIsDecreased,
            )}
          >{`${percentage}%`}</div>
        </div>
      </div>
    </Card>
  );
};

export default TodayCard;
