interface Icon {
  src: string;
  alt?: string;
}

export const ICONS: {[key: string]: Icon} = {
  'hospital': {
    src: './src/assets/icons/hospital.svg',
    alt: 'Hospital'
  },
  'arrowDown': {
    src: './src/assets/icons/arrow-down.svg',
    alt: 'Arrow down'
  },
  'search': {
    src: './src/assets/icons/search.svg',
    alt: 'Search icon'
  }
};
