import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { POLAR_DATA, POLAR_REALTIME_DATA } from './data';

type PolarDataType = {
  id: string;
  name: string;
  value: number;
};

type PolarStoreType = {
  polar: PolarDataType[];
  polarRealtime: PolarDataType[];
  updatePolarRealtime: () => void;
};

export const usePolarStore = create<PolarStoreType>((set) => ({
  /* Basic */
  polar: POLAR_DATA,

  /* Realtime */
  polarRealtime: POLAR_REALTIME_DATA,
  updatePolarRealtime: () =>
    set((state) => ({
      polarRealtime: state.polarRealtime.map((data) => ({
        ...data,
        value: faker.number.int({ min: 0, max: 100 })
      }))
    }))
}));
