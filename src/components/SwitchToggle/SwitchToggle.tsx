import React from 'react';
import { Theme } from '../../context/ThemeContext';
import { styles } from '../styles';
// TODO: rename stylesNew later
import stylesNew from './SwitchToggle.module.scss';
import { ThemeType } from '../../utils/types';

interface IToggle {
  onToggle?: () => any;
  theme: ThemeType;
}

const SwitchToggle = ({ onToggle, theme }: IToggle) => {
  const labelText = theme === Theme.Dark ? 'Dark Mode' : 'Light Mode';

  return (
    <div>
      <label
        className={stylesNew.label}
        style={{
          ...styles.textStyle.cardTitleText,
          ...styles.textStyle.boldText,
        }}
      >
        {labelText}
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
