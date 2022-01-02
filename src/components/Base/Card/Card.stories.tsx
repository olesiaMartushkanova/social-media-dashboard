import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card, { ICard } from './Card';
import { Theme } from '../../../context/ThemeContext';

const Template: ComponentStory<typeof Card> = ({ ...args }: ICard) => (
  <Card {...args}>
    <div>This is my Card component child component</div>
  </Card>
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.Dark,
} as ICard;

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;
