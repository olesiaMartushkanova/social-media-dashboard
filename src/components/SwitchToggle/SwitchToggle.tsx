import React from 'react';
import { Theme } from '../../context/ThemeContext';
import styles from './SwitchToggle.module.scss';
import { ThemeType } from '../../utils/types';

interface IToggle {
  onToggle?: () => any;
  theme: ThemeType;
}

const SwitchToggle = ({ onToggle, theme }: IToggle) => {
  const labelText = theme === Theme.Dark ? 'Dark Mode' : 'Light Mode';

  return (
    <div>
      <label className={styles.label}>{labelText}</label>
      <label className={styles.switch}>
        <input type="checkbox" onChange={onToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
