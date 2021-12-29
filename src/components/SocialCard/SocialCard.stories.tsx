import React from 'react';
import { Story, Meta } from '@storybook/react';
import SocialCard, { ISocialCard } from './SocialCard';
import IconFacebook from '../../images/icon-facebook.svg';
import IconTwitter from '../../images/icon-twitter.svg';

const Template: Story<ISocialCard> = ({
  isFollowers,
  isIncreasedActivity,
  topLineColor,
  icon,
}: ISocialCard) => (
  <SocialCard
    id={'test-social-card'}
    iconTitle={'@nathanf'}
    interactions={1987}
    todayStatistic={12}
    icon={icon}
    topLineColor={topLineColor}
    isFollowers={isFollowers}
    isIncreasedActivity={isIncreasedActivity}
  />
);

export const FacebookCard = Template.bind({});
FacebookCard.args = {
  icon: IconFacebook,
  isFollowers: true,
  topLineColor: 'hsl(208, 92%, 53%)',
  isIncreasedActivity: true,
} as ISocialCard;

export const TwitterCard = Template.bind({});
TwitterCard.args = {
  icon: IconTwitter,
  isFollowers: true,
  topLineColor: 'hsl(203, 89%, 53%)',
  isIncreasedActivity: true,
} as ISocialCard;

export default {
  title: 'SocialCard',
  component: SocialCard,
} as Meta;
