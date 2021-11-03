import { CSSProperties } from 'react';

const cardBaseStyle: CSSProperties = {
  width: '250px',
  maxWidth: '250px',
  display: 'inline-flex',
  padding: '30px',
};

const textStyle: ITextStyle = {
  boldText: {
    fontWeight: 700,
  },
  standardText: {
    fontWeight: 400,
  },
  cardTitleText: {
    fontSize: '12px',
    opacity: '85%',
  },
};

const primaryColors = {
  limeGreen: 'hsl(163, 72%, 41%)',
  brightRed: 'hsl(356, 69%, 56%)',
  white: 'hsl(0, 0%, 100%)',
  darkPageBG: 'hsl(230, 17%, 14%)',
  darkCardOnHoverBG: 'hsl(228, 28%, 20%)',
  darkGreyishBlueText: 'hsl(228, 12%, 44%)',
};

const lightThemeCardStyles = {
  topCardBackground: 'hsl(227, 47%, 96%)',
  textColor: 'hsl(232, 19%, 15%)',
};

const darkThemeCardStyles = {
  topCardBackground: 'hsl(228, 28%, 20%)',
  textColor: primaryColors.white,
};

export const styles = {
  cardBaseStyle,
  textStyle,
  primaryColors,
  lightThemeCardStyles,
  darkThemeCardStyles,
};

interface ITextStyle {
  boldText: CSSProperties;
  standardText: CSSProperties;
  cardTitleText: CSSProperties;
}
