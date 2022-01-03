import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.scss';
import { IThemeComponent } from '../../../utils/types';
import { Theme } from '../../../context/ThemeContext';

export interface ICard extends IThemeComponent {
  children?: any;
}

const Card = ({ children, theme }: ICard) => {
  return (
    <div
      className={classnames(styles.card, {
        [styles.cardDark]: theme === Theme.Dark,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
