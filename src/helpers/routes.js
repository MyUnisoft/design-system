import { matchPath } from 'react-router';
import { TAB_REGEX } from '../constants/regex';









// import ReportsAndForms from '../components/screens/ReportsAndForms';

const COLLAB = '/tab/collab';

/**
 * Routes array, you can use prop of Route component, key is a selector.
 * @example <caption>Dashboard exemple route</caption>
import DashBoardScreen from '../containers/controllers/Dashboard';
 *
 * const routes = [
 *   ...,
 *   {
 *     key: 'dashboard',
 *     path: '/tab/:id/dashBoard',
 *     component: DashBoardScreen
 *   }
 * ];
 */
const routes = [];

/**
 * Put your subroute here like { myRouteKey: path },
 * because we don't want this routes in NavBar component,
 * But we need it for working with menu, or to get key from other components
 *
 * @example <caption>Dashboard subroute exemple route</caption>
 *
 * const subroutes = {
 *   dashboardSub: '/tab/:id/dashBoard/sub',
 * };
 */
const subroutes = {
  dashboards: `${COLLAB}/dashboards/:dashboardId`
};

/**
 * routesBykey, format routes array into { key: path } object.
 * @example  <caption>Example usage of route system for make redirection.</caption>
import { routesByKey } from '../routes';
 * import { push } from 'connected-react-router';
 * import { connect } from 'react-redux';
 *
 * const mapDispatchToProps = dispatch => { push: (path) => dispatch(push(path)) };
 *
 * const RamdomComponent = (props) =>
 *  <button onClick={() => props.push(routesByKey.dashboard)}>Redirect me</button>
 *
 * export default connect(() => {}, mapDispatchToProps)(RandomComponent);
 */
export const routesByKey = routes.reduce(
  (p, { key, path }) => ({
    ...p,
    [key]: path
  }),
  { ...subroutes }
);

export const findRouteKeyByPathname = pathname => {
  const route = routes.find(({ path }) => matchPath(pathname, { path }));

  return route && route.key;
};

export const getRouteByKey = key =>
  routes.find(route => route.key === key) || {};

const isSpecificRoute = (pathname, startsWith) => {
  if (TAB_REGEX.test(pathname || window.location.pathname)) {
    return RegExp.$2.startsWith(startsWith);
  }

  return false;
};

const buildSpecificRoute = (pathname, contains) => {
  if (TAB_REGEX.test(pathname)) {
    if (RegExp.$2.startsWith(contains)) {
      return pathname;
    }

    return `/tab/${RegExp.$1}/${contains}/${RegExp.$2}`;
  }

  return pathname;
};

export const buildSlaveRoute = pathname =>
  buildSpecificRoute(pathname, 'slave');

export const isSlaveRoute = pathname => isSpecificRoute(pathname, 'slave');

export default routes;
