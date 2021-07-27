import { flagCancelOption, worksheetReference } from '../constants/data';
import I18n from '../assets/I18n';

export const flagsByAccount = (flags, accountNumber = '') => {
  const accountStartingWith = startingNumbers => accountNumber
  && accountNumber.startsWith(startingNumbers);

  let returnedFlags = [];

  const filteredFlags = (selectedFlags) => {
    let newFlags = [];
    selectedFlags.forEach((selectedFlag) => {
      newFlags = [...newFlags, ...flags.filter(({ name }) => name === selectedFlag)];
    });
    const hasNoneFlag = !!newFlags.find(({ name }) => name === I18n.t('newAccounting.flagDialog.none'));

    if (!hasNoneFlag) newFlags.push(...flagCancelOption);
    return newFlags;
  };

  if (accountStartingWith('2')) {
    if (accountStartingWith('218')) {
      return filteredFlags(['FNP', 'IMMO']);
    }
    return filteredFlags(['FNP', 'IMMO']);
  }

  if (accountStartingWith('6')) {
    if (accountStartingWith('60')) {
      return filteredFlags(['CCA', 'FNP', 'AAR', 'CAP_DIV']);
    }
    if (accountStartingWith('61')) {
      if (accountStartingWith('612')) {
        return filteredFlags(['C-B', 'CCA', 'FNP', 'CAP_DIV', 'AAR']);
      }
      if (accountStartingWith('613')) {
        return filteredFlags(['C-B', 'CCA', 'FNP', 'CAP_DIV', 'AAR']);
      }
      return filteredFlags(['CCA', 'FNP', 'AAR', 'CAP_DIV']);
    }
    if (accountStartingWith('62')) {
      return filteredFlags(['CCA', 'FNP', 'AAR', 'CAP_DIV']);
    }
    if (accountStartingWith('63')) {
      return filteredFlags(['CCA', 'CAP_IT', 'CAP_DIV']);
    }
    if (accountStartingWith('65')) {
      return filteredFlags(['CCA', 'FNP', 'AAR', 'CAP_DIV']);
    }
    if (accountStartingWith('66')) {
      return filteredFlags(['CCA', 'CAP_DIV', 'CAP_INT']);
    }
    if (accountStartingWith('64')) {
      if (accountStartingWith('641')) {
        return filteredFlags(['CCA', 'CAP_PER']);
      }
      if (accountStartingWith('644')) {
        return filteredFlags(['CCA', 'CAP_CS']);
      }
    }
    returnedFlags = filteredFlags(['CCA', 'FNP', 'AAR', 'CAP_PER', 'CAP_CS', 'CAP_IT', 'CAP_DIV', 'CAP_INT', 'C-B']);
    return returnedFlags;
  }

  if (accountStartingWith('7')) {
    return filteredFlags(['PCA', 'AAE', 'FAE']);
  }
};

export const filterWorksheetAccount = (currentWorksheetId, accounts) => {
  let allowedAccountNumber = null;

  switch (currentWorksheetId) {
  case worksheetReference.CCA:
    allowedAccountNumber = '486';
    break;
  case worksheetReference.PCA:
    allowedAccountNumber = '487';
    break;
  case worksheetReference.FNP:
    allowedAccountNumber = '4081';
    break;
  case worksheetReference.AAR:
    allowedAccountNumber = '4098';
    break;
  case worksheetReference.AAE:
    allowedAccountNumber = '4198';
    break;
  case worksheetReference.CAP_PER:
    allowedAccountNumber = '4281';
    break;
  case worksheetReference.CAP_CS:
    allowedAccountNumber = '4381';
    break;
  case worksheetReference.CAP_IT:
    allowedAccountNumber = '4481';
    break;
  case worksheetReference.CAP_DIV:
    allowedAccountNumber = '468';
    break;
  case worksheetReference.CAP_INT:
    allowedAccountNumber = '5181';
    break;
  case worksheetReference.FAE:
    allowedAccountNumber = '4181';
    break;
  }

  const filteredAccounts = accounts
    .filter(({ account_number }) => account_number.startsWith(allowedAccountNumber))
    .map(option => ({ ...option, value: option.account_id }));

  return filteredAccounts;
};

export const filterWorksheetVatAccount = (currentWorksheetId, accounts) => {
  let allowedAccountNumber = null;

  switch (currentWorksheetId) {
  case worksheetReference.FNP:
    allowedAccountNumber = '44586';
    break;
  case worksheetReference.AAR:
    allowedAccountNumber = '44586';
    break;
  case worksheetReference.AAE:
    allowedAccountNumber = '44587';
    break;
  case worksheetReference.FAE:
    allowedAccountNumber = '44587';
    break;
  }

  const filteredAccounts = accounts
    .filter(({ account_number }) => account_number.startsWith(allowedAccountNumber))
    .map(option => ({ ...option, value: option.account_id }));

  return filteredAccounts;
};

/**
 * Escape every special characters to use them as literally
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
 * 
 * @param {string} string - String to escape
 */
export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Check if the value matches the given term
 * 
 * @param {string} term - The term used for the regex
 * @param {string|number} value - The tested value
 */
export const isMatching = (term, value) => {
  if (!['number', 'string'].includes(typeof term)) return false;
  // TODO: Add accent converter
  const reg = new RegExp(escapeRegExp(term.toString()), 'i');
  return value && reg.test(value);
};

/**
 * Check if the term matches the fullname as `firstname lastname` or `lastname firstname`
 * 
 * @param {string} term - The term used for the regex 
 * @param {object} userData - The user object
 * @param {string} userData.firstname - The user firstname
 * @param {string} userData.lastname - The user lastname
 */
export const isMatchingUser = (term, { firstname, lastname }) => {
  return isMatching(term, `${firstname} ${lastname}`) || isMatching(term, `${lastname} ${firstname}`);
};

/**
 * Checks if the given `object` matches a list of `filters`
 * 
 * @param {object} row - The data to check 
 * @param {array} filters - List of specific column filters
 */
export const matchFilterList = (row, filters = []) => {
  return filters.every(([key, value]) => {
    if (!value) return true;
    return isMatching(value, row[key]);
  });
};

export const onStringStartWith = (valToCheck = '', val = '') => valToCheck.toLowerCase().startsWith(val.toLowerCase());
