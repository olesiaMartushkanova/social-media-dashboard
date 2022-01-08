import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card, { ICard } from './Card';

const Template: ComponentStory<typeof Card> = ({ ...args }: ICard) => (
  <Card {...args}>
    <div>This is my Card component child component</div>
  </Card>
);

export const Default = Template.bind({});

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;
