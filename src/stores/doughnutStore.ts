import { create } from 'zustand';
import { faker } from '@faker-js/faker';

const DOUGHNUT_DATA = [
  { id: '0318', name: 'A', value: 57 },
  { id: '3c3f', name: 'B', value: 30 },
  { id: 'c15e', name: 'C', value: 97 },
  { id: '2349', name: 'D', value: 74 },
  { id: 'e2be', name: 'E', value: 15 }
];

const DOUGHNUT_REALTIME_DATA = [
  { id: 'e9d7', name: 'A', value: 54 },
  { id: 'bf21', name: 'B', value: 25 },
  { id: 'b5ca', name: 'C', value: 92 },
  { id: '9b9c', name: 'D', value: 75 },
  { id: 'c35d', name: 'E', value: 67 }
];

type DoughnutDataType = {
  id: string;
  name: string;
  value: number;
};

type DoughnutStoreType = {
  doughnut: DoughnutDataType[];
  doughnutRealtime: DoughnutDataType[];
  updateDoughnutRealtime: () => void;
};

export const useDoughnutStore = create<DoughnutStoreType>((set) => ({
  /* Basic */
  doughnut: DOUGHNUT_DATA,

  /* Realtime */
  doughnutRealtime: DOUGHNUT_REALTIME_DATA,
  updateDoughnutRealtime: () =>
    set((state) => ({
      doughnutRealtime: state.doughnutRealtime.map((data) => ({
        ...data,
        value: faker.number.int({ min: 0, max: 100 })
      }))
    }))
}));
