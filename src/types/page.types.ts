import { IOtherMinor } from '.';
import { INihilArea, INihilOrga } from './words.types';

export interface INihilWords {
  races: string[];
  classes: string[];
  organizations: INihilOrga[];
  areas: INihilArea;
  purposes: string[];
  places: string[];
  genders: string[];
}

export interface INihilPage {
  words: INihilWords;
}

export interface ICharacterWords {
  genres: string[];
  races: string[];
  classReal: string[];
  classFantasy: string[];
  genders: string[];
  types: string[];
  roles: string[];
  personalityPositive: string[];
  personalityNegative: string[];
  attributes: string[];
  features: string[];
  skills: string[];
  purposeReal: string[];
  purposeFantasy: string[];
  whereReal: string[];
  whereFantasy: string[];
  weapons: string[];
  fashionConcept: string[];
  age: string[];
}

export interface ICharacterPage {
  words: ICharacterWords;
}

export interface IOtherWords {
  constellations: string[];
  arcanaMajor: string[];
  arcanaMinor: IOtherMinor[];
  playingCard: string[];
  gemStone: string[];
  creature: string[];
}

export interface IOtherPage {
  words: IOtherWords;
}

export interface IRandomWords {
  randomBase: string[];
  randomCreature: string[];
  randomBreast: string[];
  randomRace: string[];
  randomSin: string[];
  randomConstellation: string[];
  randomTool: string[];
  randomTableWare: string[];
  randomAstronomy: string[];
  randomFruit: string[];
  randomVegetable: string[];
  randomWeather: string[];
  randomClass: string[];
  randomCharacterType: string[];
  randomMetal: string[];
  randomFigure: string[];
  randomBody: string[];
  randomStatus: string[];
  randomNobility: string[];
  randomWeapon: string[];
  randomGenre: string[];
  randomFeature: string[];
  randomGem: string[];
  randomFashion: string[];
  randomRole: string[];
  randomLength: number;
}

export interface IRandomPage {
  words: IRandomWords;
}
