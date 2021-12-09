import React from 'react';
import { Theme } from '../../context/ThemeContext';
import { IThemeComponent } from '../../utils/types';
import { styles } from '../styles';
import stylesNew from './SwitchToggle.module.scss';

interface IToggle extends IThemeComponent {
  onToggle?: () => any;
}

const SwitchToggle = ({ onToggle, theme }: IToggle) => {
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
        <input type="checkbox" onChange={onToggle} />
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
