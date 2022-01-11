import React from 'react';
import classnames from 'classnames';
import styles from './SwitchToggle.module.scss';
import { Theme } from '../../context/ThemeContext';
import { ITheme } from '../../utils/types';

export interface ISwitchToggle extends ITheme {
  className?: string;
  onToggle?: () => any;
}

const SwitchToggle = ({ onToggle, className, theme }: ISwitchToggle) => {
  return (
    <div className={className}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={onToggle} />
        <span
          className={classnames(styles.slider, {
            [styles.sliderDark]: theme === Theme.Dark,
          })}
        ></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
