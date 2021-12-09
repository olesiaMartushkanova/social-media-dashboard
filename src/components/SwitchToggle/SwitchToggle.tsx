import React from 'react';
import { Theme, useTheme } from '../../context/ThemeContext';
import { styles } from '../styles';
import stylesNew from './SwitchToggle.module.scss';

const SwitchToggle = () => {
  const { theme, setTheme } = useTheme();

  // THis has to be removed and triggered only from app
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
      <label className={stylesNew.switch}>
        <input type="checkbox" onChange={onToggled} />
        <span className={stylesNew.slider}></span>
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
