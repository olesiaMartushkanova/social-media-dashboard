import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconFacebook from '../../images/icon-facebook.svg';
import TodayCard, { ITodayCard } from './TodayCard';

const Template: ComponentStory<typeof TodayCard> = ({
  ...args
}: ITodayCard) => (
  <TodayCard
    {...args}
    id={'test-today-card'}
    title={'Likes'}
    icon={IconFacebook}
    interactions={52}
    percentage={2}
    isIncreasedActivity={false}
  />
);

export const Default = Template.bind({});

export default {
  title: 'Today',
  component: TodayCard,
} as ComponentMeta<typeof TodayCard>;
