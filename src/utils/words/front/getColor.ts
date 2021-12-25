export const getColor = () => {
  const hexBox: string[] = [];
  let hex: string;

  for (let i = 0; i < 3; i++) {
    hex = Math.ceil(Math.random() * 255).toString(16).padStart(2, '0').toUpperCase();
    hexBox.push(hex);
  }

  return hexBox.join('');
};
