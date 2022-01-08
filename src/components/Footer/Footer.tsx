import React from 'react';
import { ITheme } from '../../utils/types';
import classnames from 'classnames';
import styles from './Footer.module.scss';
import { Theme } from '../../context/ThemeContext';

interface IFooter extends ITheme {
  className?: string;
}

const Footer = ({ theme, className }: IFooter) => {
  const dark = theme === Theme.Dark;

  return (
    <div
      className={classnames(className, styles.footer, {
        [styles.footerDark]: dark,
      })}
    >
      {'Challenge by '}
      <a
        className={classnames(styles.link, {
          [styles.linkDark]: dark,
        })}
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
