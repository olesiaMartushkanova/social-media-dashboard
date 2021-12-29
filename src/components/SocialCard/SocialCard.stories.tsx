import React from 'react';
import { Story, Meta } from '@storybook/react';
import SocialCard, { ISocialCard } from './SocialCard';
import IconFacebook from '../../images/icon-facebook.svg';

const Template: Story<ISocialCard> = (props) => {
  const cards: ISocialCard[] = [
    {
      id: 'facebook-social-card',
      iconTitle: '@nathanf',
      interactions: 1987,
      todayStatistic: 12,
      icon: IconFacebook,
      isFollowers: true,
      topLineColor: 'hsl(208, 92%, 53%)',
      isIncreasedActivity: true,
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <li key={card.id}>
          <SocialCard
            id={card.id}
            iconTitle={card.iconTitle}
            interactions={card.interactions}
            todayStatistic={card.todayStatistic}
            icon={card.icon}
            topLineColor={card.topLineColor}
            isFollowers={card.isFollowers}
            isIncreasedActivity={card.isIncreasedActivity}
          />
        </li>
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {} as ISocialCard;

export default {
  title: 'SocialCard',
  component: SocialCard,
} as Meta;
