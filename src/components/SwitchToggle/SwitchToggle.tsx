import React from 'react';
import { Theme, useTheme } from '../../context/ThemeContext';
import { styles } from '../styles';
import './SwitchToggle.css';

const SwitchToggle = () => {
  const { theme, setTheme } = useTheme();

  const onToggled = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  const text = theme === Theme.Light ? 'Dark Mode' : 'Light Mode';
  const textColor =
    theme === Theme.Dark
      ? styles.primaryColors.white
      : styles.primaryColors.darkGreyish;

  return (
    <div>
      <label
        style={{
          ...styles.textStyle.cardTitleText,
          ...styles.textStyle.boldText,
          marginRight: '5px',
          color: textColor,
        }}
      >
        {text}
      </label>
      <label className="switch">
        <input className="checkbox" type="checkbox" onChange={onToggled} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
