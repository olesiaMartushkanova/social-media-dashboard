import React from 'react';
import { Theme, useTheme } from '../../context/ThemeContext';
import { styles } from '../styles';
import './SwitchToggle.css';

const SwitchToggle = () => {
  const { theme, setTheme } = useTheme();

  const onToggled = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  const switchToggleThemeStyles = theme === Theme.Dark ? darkTheme : lightTheme;

  return (
    <div>
      <label
        style={{
          ...styles.textStyle.cardTitleText,
          ...styles.textStyle.boldText,
          marginRight: '5px',
          color: switchToggleThemeStyles.textColor,
        }}
      >
        {switchToggleThemeStyles.text}
      </label>
      <label className="switch">
        <input className="checkbox" type="checkbox" onChange={onToggled} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

const darkTheme = {
  text: 'Dark Mode',
  textColor: styles.primaryColors.white,
};

const lightTheme = {
  text: 'Light Mode',
  textColor: styles.primaryColors.darkGreyishBlueText,
};

export default SwitchToggle;
