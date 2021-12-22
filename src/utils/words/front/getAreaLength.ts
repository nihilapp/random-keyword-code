import { INihilArea } from '@/types';

export const getAreaLength = (areas: INihilArea) => {
  const counts: number[] = [];

  for (const area in areas) {
    if (Object.prototype.hasOwnProperty.call(areas, area)) {
      if (area === '지역') {
        counts.push(0);
      } else if (area === '유센티아 대륙') {
        counts.push(areas[area].length - 4);
      } else if (areas[area].length === 0) {
        counts.push(1);
      } else {
        counts.push(areas[area].length);
      }
    }
  }

  const count = counts.reduce((pre, crr) => pre + crr, 0);

  return count;
};
