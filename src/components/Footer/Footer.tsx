import React from 'react';

const Footer = () => {
  const mainTextWithSpace = `Challenge by `;
  return (
    <div style={{ fontSize: '14px', textAlign: 'center' }}>
      {mainTextWithSpace}
      <a
        style={{ color: 'hsl(228, 45%, 44%)' }}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank" rel="noreferrer"
      >
        Frontend Mentor
      </a>
      <div>Coded by Olesia</div>
    </div>
  );
};

export default Footer;
