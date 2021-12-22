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
}

export interface ICharacterPage {
  words: ICharacterWords;
}

export interface IOtherwords {
  constellations: string[];
  arcanaMajor: string[];
  arcanaMinor: IOtherMinor[];
  playingCard: string[];
}

export interface IOtherPage {
  words: IOtherwords;
}
