import _isNull from 'lodash/isNull';
import _find from 'lodash/find';
import _get from 'lodash/get';
import _memoize from 'lodash/memoize';

import I18n from '../assets/I18n';
import moment from 'moment';

export const formatToDash = (date) => {
  if (date) {
    const day = date.slice(0, 2);
    const month = date.slice(3, 5);
    const year = date.slice(6, 10);
    return `${year}-${month}-${day}`;
  } return null;
};

export const frenchDateFormat = date => moment(date).format('DD/MM/YYYY');

export const checkAndFormatDate = (date) => {
  const setDate = date === moment(date).format('YYYYMMDD') ? date : moment(date).format('YYYYMMDD');
  return setDate;
};

export const checkAndFormatDate_Dash = (date) => {
  const setDate = date === moment(date).format('YYYY-MM-DD') ? date : moment(date).format('YYYY-MM-DD');
  return setDate;
};

export const checkAndFormatDate_Slash = (date) => {
  const setDate = date === moment(date).format('YYYY/MM/DD') ? date : moment(date).format('YYYY/MM/DD');
  return setDate;
};

export const isAfter = (startDate, endDate) => moment(endDate).isSameOrAfter(moment(startDate));

export const isBetweenDates = (date, startDate,endDate) =>
  moment(date).isBetween(startDate,endDate) || moment(date).isSame(startDate) || moment(date).isSame(endDate);

export const addOneYear = startDate => moment(startDate).add(1, 'years').format('YYYY-MM-DD');
export const addOneDay = date => moment(date).add(1, 'days').format('YYYY-MM-DD');
export const subtractOneYear = date => moment(date).subtract(1, 'years').format('YYYY-MM-DD');
export const subtractOneDay = date => moment(date).subtract(1, 'days').format('YYYY-MM-DD');

export const findDate = (table = []) => {
  if (table.length === 0) {
    return {
      start: '',
      end: ''
    };
  }
  let start = null;
  let end = null;

  if (!table.length) {
    return {
      start: moment(table.start_date).format('YYYYMMDD'),
      end: moment(table.end_date).format('YYYYMMDD')
    };
  }

  if (table.length === 1) {
    return {
      start: moment(table[0].start_date).format('YYYYMMDD'),
      end: moment(table[0].end_date).format('YYYYMMDD')
    };
  }

  table.forEach((data) => {
    if (_isNull(start) || moment(data.start_date).format('YYYYMMDD') < start) start = moment(data.start_date).format('YYYYMMDD');
    if (_isNull(end) || moment(data.end_date).format('YYYYMMDD') > end) end = moment(data.end_date).format('YYYYMMDD');
  });

  return { start, end };
};

export const fromNow = datetime => moment(datetime, 'YYYY-MM-DD HH:mm').calendar(null, {
  sameDay: `[${I18n.t('date.sameDay')}] HH:mm`,
  nextDay: `[${I18n.t('date.nextDay')}] HH:mm`,
  nextWeek: `[${I18n.t('date.nextWeek')}] HH:mm`,
  lastDay: `[${I18n.t('date.lastDay')}] HH:mm`,
  lastWeek: 'DD/MM/YYYY HH:mm',
  sameElse: 'DD/MM/YYYY HH:mm'
});

export const getMoment = date => moment(date).calendar(null, {
  sameDay: I18n.t('discussions.messageDateNames.sameDay'),
  nextDay: I18n.t('discussions.messageDateNames.nextDay'),
  nextWeek: I18n.t('discussions.messageDateNames.nextWeek'),
  lastDay: I18n.t('discussions.messageDateNames.lastDay'),
  lastWeek: I18n.t('discussions.messageDateNames.lastWeek'),
  sameElse: I18n.t('discussions.messageDateNames.sameElse')
});

export const monthsList = [
  { label: 'Janvier', value: '01' },
  { label: 'Février', value: '02' },
  { label: 'Mars', value: '03' },
  { label: 'Avril', value: '04' },
  { label: 'Mai', value: '05' },
  { label: 'Juin', value: '06' },
  { label: 'Juillet', value: '07' },
  { label: 'Août', value: '08' },
  { label: 'Septembre', value: '09' },
  { label: 'Octobre', value: '10' },
  { label: 'Novembre', value: '11' },
  { label: 'Décembre', value: '12' }
];

export const yearsList = [
  { label: '2013', value: '2013' },
  { label: '2014', value: '2014' },
  { label: '2015', value: '2015' },
  { label: '2016', value: '2016' },
  { label: '2017', value: '2017' },
  { label: '2018', value: '2018' },
  { label: '2019', value: '2019' },
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' },
  { label: '2026', value: '2026' },
  { label: '2027', value: '2027' }
];

export const getSelectedMonth = date => _find(monthsList, m => m.value === moment(date).format('MM'));
export const getSelectedYear = date => _find(yearsList, y => y.value === moment(date).format('YYYY'));

export const getCurrentExerciseFromDates = (start_date, end_date, exercises) => _find(
  exercises, e => (
    (_get(e, 'start_date') === start_date) && (_get(e, 'end_date') === end_date)
  )
);

const getCurrentExerciseFromDate = (date, exercises) => _find(exercises, e => (
  moment(date).isBetween(_get(e, 'start_date'), _get(e, 'end_date'))
    || moment(date).isSame(_get(e, 'start_date'))
    || moment(date).isSame(_get(e, 'end_date'))
));

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const isWeekEnd = date => (date.getDay() === 6) || (date.getDay() === 0);

export const getCurrentExerciseFromDateMemoized = _memoize(getCurrentExerciseFromDate);

export const getAllEndDateFromExercises = exercises => exercises.length && exercises
  .map(({ end_date }) => (moment(end_date)));

export const getAllStartDatefromExercises = exercises => exercises.length && exercises
  .map(({ start_date }) => (moment(start_date)));

export const getMaxDateFromExercises = allEndDates => allEndDates.length && moment.max(allEndDates).format('YYYY-MM-DD');

export const getMinDateFromExercises = allStartDates => allStartDates.length && moment.min(allStartDates).format('YYYY-MM-DD');

export const sortDateByIncrement = (a, b) => {
  if (moment(a).isBefore(moment(b))) {
    return -1;
  }
  if (moment(a).isAfter(moment(b))) {
    return 1;
  }
  return 0;
};

/**
 *
 * @param {string} sort - Side you want to sort, ASC or DESC
 * @param {function} getDate - Function use to get date value from the object
 */
export const sortByDate = (sort = 'ASC', getDate, dateFormat = 'DD/MM/YYYY') => (a, b) => {
  if (!getDate) throw new Error('[src/helpers/date.js][sortByDate] Please specify getDate');
  if (!['ASC', 'DESC'].includes(sort)) throw new Error('[src/helpers/date.js][sortByDate] Specified sort is not available, please use ASC or DESC only');
  const formatFunction = {
    ASC: (a, b) => b - a,
    DESC: (a, b) => a - b
  };
  const dateA = getDate(a);
  const dateB = getDate(b);
  if (!dateA || !dateB) throw new Error('[src/helpers/date.js][sortByDate] Error when trying to retrieve dates');
  const dateAF = moment.isMoment(dateA) ? dateA : moment(dateA, dateFormat);
  const dateBF = moment.isMoment(dateB) ? dateB : moment(dateB, dateFormat);
  return formatFunction[sort](dateAF, dateBF);
};

const MONTHS_QUARTER_INDEX = [3 ,6 ,9 ,12];

/**
 * Constructs quarter according to the year and day
 * @param {number} year
 * @param {number} day
 * @returns Array[string]
 */
export function getQuarters(year = moment().year(), day = 1) {
  return MONTHS_QUARTER_INDEX.map(
    month => moment(`${year}-${month}-${day}`)
  );
}
