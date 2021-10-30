import React from 'react';
import './SwitchToggle.css';

// Toggle switch

// TODO:
// - Add styles
// - Add feature to trigger change of the mode

const SwitchToggle = () => {
  return (
    <div>
      <label className="switch">
        <input
          className="checkbox"
          type="checkbox"
          //   checked={isToggled}
          //   onChange={onToggled}
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
