import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { ICard } from './Card';

const Template: Story<ICard> = () => (
  <Card>This is my Card component child component</Card>
);

export const Default = Template.bind({});

export default {
  title: 'Card',
  component: Card,
} as Meta;
