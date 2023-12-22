export type HeroItems = {
  id: number;
  title: string;
  icon?: string | null;
  value: string;
  rate: string;
  verified: boolean;
};
export const HERO_ITEMS: HeroItems[] = [
  {
    id: 1,
    title: 'CryptoFunks',
    value: '19,769.39',
    rate: '+26.52%',
    icon: '/images/unsplash-k-0-r-vud-bo-b-4-c.svg',
    verified: true,
  },
  {
    id: 2,
    title: '2 CryptoFunks',
    value: '19,769.39',
    rate: '+26.52%',
    icon: '/images/unsplash-k-0-r-vud-bo-b-4-c.svg',
    verified: false,
  },
];
