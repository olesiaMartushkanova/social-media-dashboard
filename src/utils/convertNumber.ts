/* If number > 10999
   returns 11K
 */
export const convertNumberToShortThousands = (numberToConvert: number) => {
  if (numberToConvert > 10999 && numberToConvert < 1000000) {
    return (numberToConvert / 1000).toFixed(0) + 'K';
  } else {
    return numberToConvert;
  }
};
