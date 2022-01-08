import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.scss';
import { ITheme } from '../../../utils/types';
import { Theme } from '../../../context/ThemeContext';

export interface ICard extends ITheme {
  className?: string;
  children?: any;
}

const Card = ({ children, theme, className }: ICard) => {
  return (
    <div
      className={classnames(className, styles.card, {
        [styles.cardDark]: theme === Theme.Dark,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
