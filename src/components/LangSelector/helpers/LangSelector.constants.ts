import * as customIcons from 'components/Icon/customIcons';

export interface Lang {
  name: keyof typeof customIcons;
  translation: string;
}

export const languages: Lang[] = [
  {
    name: 'en',
    translation: 'english',
  },
  {
    name: 'pl',
    translation: 'polish',
  },
];

export const MAX_NUMBER_OF_LETTERS = 2
