/**
 * @func getColorByName - Get color from theme according to name
 * @param {string} color - Name of color you need
 * (primary|secondary|warning|success|error|info|unavailable)
 * @returns {string} The color selected from the theme according to param color.
 */
export const getColorByName = (color, { palette }) => {
  switch (color) {
  case 'primary':
    return palette.primary.main;
  case 'primary_dark':
    return palette.primary.dark;
  case 'secondary':
    return palette.secondary.main;
  case 'warning':
    return palette.warning.main;
  case 'success':
    return palette.success.main;
  case 'error':
    return palette.error.main;
  case 'info':
    return palette.info.main;
  case 'unavailable':
    return palette.unavailable.main;
  default:
    return color;
  }
};
