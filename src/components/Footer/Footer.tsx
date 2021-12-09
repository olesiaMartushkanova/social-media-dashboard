import React from 'react';
import { Theme } from '../../context/ThemeContext';
import { IThemeComponent } from '../../utils/types';
import styles from './Footer.module.scss';

const Footer = ({ theme = Theme.Light }: IThemeComponent) => {
  const mainTextWithSpace = `Challenge by `;
  const linkStyle =
    theme === Theme.Dark ? styles['dark-link'] : styles['light-link'];

  return (
    <div className={styles.footer}>
      {mainTextWithSpace}
      <a
        className={linkStyle}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      <div>Coded by Olesia</div>
    </div>
  );
};

export default Footer;
