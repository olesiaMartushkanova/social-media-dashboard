import React from 'react';
import classnames from 'classnames';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { ITheme } from '../../utils/types';
import styles from './SocialCard.module.scss';
import Card from '../Base/Card/Card';
import classNames from 'classnames';

export interface ISocialCard extends ITheme {
  id: string;
  iconTitle: string;
  icon: any;
  interactions: number;
  todayStatistic: number;
  topLineColor: string;
  isIncreasedActivity: boolean;
  isFollowers: boolean;
}

const SocialCard = ({
  icon,
  iconTitle,
  interactions,
  todayStatistic,
  isFollowers,
  topLineColor,
  isIncreasedActivity,
  theme,
}: ISocialCard) => {
  const followersText = isFollowers ? 'FOLLOWERS' : 'SUBSCRIBERS';
  const socialInteractions =
    convertNumberToShortThousands(interactions).toString();

  const activityIcon = isIncreasedActivity ? IconUp : IconDown;

  return (
    <Card theme={theme}>
      <div className={styles.topLine} style={{ background: topLineColor }} />
      <div className={styles.mainContentContainer}>
        <div className={styles.iconContainer}>
          <img className={styles.image} src={icon} />
          <div>{iconTitle}</div>
        </div>
        <div className={styles.socialInteractionsNumber}>
          {socialInteractions}
        </div>
        <div className={styles.followers}>{followersText}</div>

        <div className={styles.activityContainer}>
          <div>
            <img
              className={classnames(styles.image, styles.activityIcon)}
              src={activityIcon}
            />
          </div>

          <div
            className={styles.todayNumber}
          >{`${todayStatistic.toString()} Today`}</div>
        </div>
      </div>
    </Card>
  );
};

export default SocialCard;
