const colors: readonly string[] = ['blue, green, white', 'green, white, pastel yellow', 'blue, pink, white, pastel yellow', 'pink, white, pastel yellow', 'pastel pink, green, white', 'blue, pastel pink, white'];

const getStyle = () => {
  const colorIndex = Math.floor(Math.random() * (colors.length - 1));
  return `drawing line, minimalism, pastel colors, ${colors[colorIndex]}`;
};

export default getStyle;
