import mockedData from './mockedData.json';

export const enum SeatsAvailability {
  reserved = 'reserved',
  free = 'free',
}

export type Routes = {
  name: string;
  route: string;
  firstFlorSeats: SeatsAvailability[];
  secondFlorSeats: SeatsAvailability[];
  speedRate: number;
};

export const simulateFetch = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      setTimeout(() => {
        resolve(mockedData);
      }, 2000);
    }, 2000);
  });
};
