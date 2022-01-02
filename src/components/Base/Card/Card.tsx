import React from 'react';
import styles from './Card.module.scss';

export interface ICard {
  children?: any;
}

const Card = ({ children }: ICard) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
