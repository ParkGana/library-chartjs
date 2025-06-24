import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { BAR_DATA, BAR_REALTIME_DATA } from './data';

type BarListDataType = {
  id: string;
  name: string;
  value: number;
};

type BarListStoreType = {
  bar: BarListDataType[];
  barRealtime: BarListDataType[];
  updateBarRealtime: () => void;
};

export const useBarListStore = create<BarListStoreType>((set) => ({
  /* Basic */
  bar: BAR_DATA,

  /* Realtime */
  barRealtime: BAR_REALTIME_DATA,
  updateBarRealtime: () =>
    set((state) => ({
      barRealtime: state.barRealtime.map((data) => ({
        ...data,
        value: faker.number.int({ min: 0, max: 100 })
      }))
    }))
}));
