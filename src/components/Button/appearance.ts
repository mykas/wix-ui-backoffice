import {Size} from './constants';
import {Appearance} from '../UIText';

const sizeToAppearance: {[index: string]: Appearance} = { // TODO: Strictly type SIZE index, please
  [Size.TINY]: 'T4',
  [Size.SMALL]: 'T3',
  [Size.MEDIUM]: 'T1',
  [Size.LARGE]: 'T1'
};

const sizeToIconSize = {
  [Size.TINY]: '8px',
  [Size.SMALL]: '12px',
  [Size.MEDIUM]: '12px',
  [Size.LARGE]: '16px'
};

export const appearance = (size: Size): string => sizeToAppearance[size];

export const iconSize = (size: Size): string => sizeToIconSize[size];
