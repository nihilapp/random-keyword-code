export const colorContrast = (color: string) => {
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const contrast = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  return (contrast >= 128) ? '#000000' : '#FFFFFF';
};
