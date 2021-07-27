const defaultColors = [
  '#ffd204',
  '#a177ff',
  '#fe3a5e',
  '#ad69c5',
  '#50e3c2'
];

export const sumChars = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) { // eslint-disable-line
    sum += str.charCodeAt(i);
  }

  return sum;
};

export const generateColorWithName = (name) => {
  const i = sumChars(name) % defaultColors.length;
  return defaultColors[i];
};
