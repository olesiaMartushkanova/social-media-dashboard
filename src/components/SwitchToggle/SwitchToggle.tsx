import React from 'react';
import styles from './SwitchToggle.module.scss';

export interface ISwitchToggle {
  className?: string;
  onToggle?: () => any;
}

const SwitchToggle = ({ onToggle, className }: ISwitchToggle) => {
  return (
    <div className={className}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={onToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
