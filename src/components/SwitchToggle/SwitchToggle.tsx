import React from 'react';

import styles from './SwitchToggle.module.scss';

export interface ISwitchToggle {
  onToggle?: () => any;
}

const SwitchToggle = ({ onToggle }: ISwitchToggle) => {
  // const labelText = theme === Theme.Dark ? 'Dark' : 'Light';

  return (
    <div>
      {/* <label
        className={classnames(styles.label, {
          [styles.labelDark]: theme === Theme.Dark,
        })}
      >{`${labelText} Mode`}</label> */}
      <label className={styles.switch}>
        <input type="checkbox" onChange={onToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
