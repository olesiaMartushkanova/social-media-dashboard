import React from 'react';
import { styles } from '../styles';
import './SwitchToggle.css';

// Toggle switch

// TODO:
// - Add styles
// - Add feature to trigger change of the mode

const SwitchToggle = () => {
  return (
    <div>
      <label
        style={{
          ...styles.textStyle.cardTitleText,
          ...styles.textStyle.boldText,
          marginRight: '5px',
        }}
      >
        Dark Mode
      </label>
      <label className="switch">
        <input
          className="checkbox"
          type="checkbox"
          // checked={isToggled}
          // onChange={onToggled}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

// interface ISwitchToggle {
//   isRounded?: boolean;
//   isToggled?: boolean;
//   onToggled?: any;
// }

export default SwitchToggle;
