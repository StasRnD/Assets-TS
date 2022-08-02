export const language = 'en-US';

export const formatter = new Intl.NumberFormat(language, {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});
