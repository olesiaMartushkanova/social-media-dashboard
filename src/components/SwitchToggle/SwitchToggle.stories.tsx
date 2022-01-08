import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SwitchToggle, { ISwitchToggle } from './SwitchToggle';
import { Theme } from '../../context/ThemeContext';

const Template: ComponentStory<typeof SwitchToggle> = ({
  ...args
}: ISwitchToggle) => {
  const [theme, setTheme] = React.useState(Theme.Light);

  const handleOnToggle = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  const color = theme === Theme.Dark ? 'black' : 'white';

  return (
    <div style={{ backgroundColor: color }}>
      <SwitchToggle {...args} onToggle={handleOnToggle} />
    </div>
  );
};

export const Default = Template.bind({});

export default {
  title: 'SwitchToggle',
  component: SwitchToggle,
} as ComponentMeta<typeof SwitchToggle>;
