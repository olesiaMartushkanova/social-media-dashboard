import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import IconDown from '../../images/icon-down.svg';
import IconUp from '../../images/icon-up.svg';
import { IThemeComponent } from '../../utils/types';
import stylesNew from './SocialCard.module.scss';

export interface ISocialCard extends IThemeComponent {
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
    <>
      <div className={stylesNew.topLine} style={{ background: topLineColor }} />
      <div className={stylesNew.container}>
        <div className={stylesNew.card}>
          <img className={stylesNew.image} />
          <div>{iconTitle}</div>
        </div>
        <div>{socialInteractions}</div>
        <div className={stylesNew.followers}>{followersText}</div>

        <div>
          <div>
            <img className={stylesNew.image} src={activityIcon} />
          </div>

          <div>{`${todayStatistic.toString()} Today`}</div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
