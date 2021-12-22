import React from 'react';
import { convertNumberToShortThousands } from '../../utils/convertNumber';
import { styles } from '../styles';
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

  const activityTextColor = isIncreasedActivity
    ? styles.primaryColors.limeGreen
    : styles.primaryColors.brightRed;

  const activityIcon = isIncreasedActivity ? IconUp : IconDown;

  return (
    <>
      <div className={stylesNew.topLine} style={{ background: topLineColor }} />
      <div
        className={stylesNew.container}
        style={{
          ...styles.cardBaseStyle,
        }}
      >
        <div className={stylesNew.card}>
          <img className={stylesNew.image} />
          <div
            style={{
              ...styles.textStyle.boldText,
              ...styles.textStyle.cardTitleText,
            }}
          >
            {iconTitle}
          </div>
        </div>
        <div style={{ ...styles.textStyle.boldText, fontSize: '45px' }}>
          {socialInteractions}
        </div>
        <div className={stylesNew.followers}>{followersText}</div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div>
            <img
              src={activityIcon}
              style={{ marginRight: '4px', marginBottom: '5px' }}
            />
          </div>

          <div
            style={{
              ...styles.textStyle.boldText,
              color: activityTextColor,
              fontSize: '11px',
            }}
          >
            {`${todayStatistic.toString()} Today`}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
