import { CSSProperties } from 'react';

const cardBaseStyle: CSSProperties = {
  backgroundColor: 'hsl(227, 47%, 96%)',
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
    opacity: '65%',
  },
};

const primaryColors = {
  limeGreen: 'hsl(163, 72%, 41%)',
  brightRed: 'hsl(356, 69%, 56%)',
};

export const styles = {
  cardBaseStyle,
  textStyle,
  primaryColors,
};

interface ITextStyle {
  boldText: CSSProperties;
  standardText: CSSProperties;
  cardTitleText: CSSProperties;
}
