import React from 'react';
import { Theme } from '../../context/ThemeContext';
import { IThemeComponent } from '../../utils/types';
import classnames from 'classnames';
import styles from './Footer.module.scss';

const Footer = ({ theme }: IThemeComponent) => {
  const footerStyle =
    theme === Theme.Dark ? classnames(styles.footer, 'dark') : styles.footer;

  return (
    <div className={footerStyle}>
      {`Challenge by `}
      <a
        // className={linkStyle}
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
