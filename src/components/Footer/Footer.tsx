import React from 'react';

interface IFooter {
  color?: string;
}

const Footer = ({ color }: IFooter) => {
  const mainTextWithSpace = `Challenge by `;
  return (
    <div style={{ fontSize: '14px', textAlign: 'center', color }}>
      {mainTextWithSpace}
      <a
        style={{ color: 'hsl(228, 45%, 44%)' }}
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
