import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { DOUGHNUT_DATA, DOUGHNUT_REALTIME_DATA } from './data';

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
