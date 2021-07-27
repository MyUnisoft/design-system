import numeral from 'numeral';

import I18n from '../assets/I18n';

/**
 * Function used to make a round of two after the . following rules of last bigger number.
 *
 * @param {*} num
 * @param decimals
 */
export const roundNumber = (num, decimals = 2) => (num
  ? +(`${Math.round(`${String(num).replace(/,/g, '.').replace(/ /g, '')}e+${decimals}`)}e-${decimals}`)
  : 0);

export const roundNumberNoDefault = (num, decimals = 2) => (num ? +(`${Math.round(`${String(num).replace(/,/g, '.').replace(/ /g, '')}e+${decimals}`)}e-${decimals}`) : '');

/**
 * Function used to format number to display thousands and decimals
 * (num || 0) because num can be undefined or null,
 * so default value as parameter wont work with null
 * +(+( beacause it can also be an object
 *
 * @param {*} num
 * @param {string} format - The format of number according to (http://numeraljs.com/#format)
 */
export const formatNumber = (num, format = '0,0.00') => numeral(+(+(num || 0)).toFixed(2)).format(format);

/**
 * Return the formatted number or an empty string if equals to 0
 *
 * @param {*} num
 * @param {string} format - The format of number according to (http://numeraljs.com/#format)
 * @returns {string} - the formatted value
 */
export const formatNumberIfNotNull = (num, format = '0,0.00') => (Math.abs(num || 0) < 0.01 ? '' : formatNumber(num, format));

export const formatNumberIfNotNullPercent = (num, format = '0,0.11') => (formatNumberIfNotNull(num, format) ? `${formatNumberIfNotNull(num, format)} %` : '');

export const formatNumberIfNotNullAndNoDecimals = (num, format = '0,0') => (Math.abs(num || 0) < 0.01 ? '' : formatNumber(num, format));

export const formatPercentage = (num, format = '0,0') => {
  if (num !== null) {
    return (
      `${formatNumber(num, format)}%`
    );
  } return '';
};

export const formatStringNumber = valueString => valueString && parseInt(valueString.replace(/\s/g, ''), 10);

export const formatComma = value => value && value.toString().replace(/\s/g, '').replace(',', '.');

export const formatCommaDecimals = value => value && parseFloat(value.toString().replace(/\s/g, '').replace(',', '.'), 10);

export const isInt = (value) => {
  const reg = /^\d+$/;
  return reg.test(value);
};

export const countDecimals = (value) => {
  if (Math.floor(value) === value) return 0;
  return value.toString().split('.')[1]?.length || 0;
};

export const hasAllNumbers = (value) => {
  return /^[0-9]+$/.test(value);
};

export function formatNumberAndRoundMaxTwoDigits(value) {
  if(!value) return '0,00';
  const replaceComaValue = value.toString().replace(',', '.');
  const digitsCount = replaceComaValue.split('.')[1]?.length || 0;
  const newValue = parseFloat(replaceComaValue).toFixed(digitsCount < 3 ? digitsCount : 2);
  return newValue.toString().replace('.', ',');
};

export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

/**
 * Check if the `value` is between `reference - accuracy` and `reference + accuracy`
 * 
 * @param {number} value - The value to check
 * @param {number} reference - The value comparated
 * @param {number} accuracy - The accuracy used for the comparison
 */
export const inRange = (value, reference, accuracy = 0) => {
  if (accuracy < 0) {
    throw new Error(I18n.t('helpers.number.accuracy.mustBePositive'));
  }
  if (accuracy === 0) return value === reference;
  return value >= reference - accuracy && value <= reference + accuracy;
};