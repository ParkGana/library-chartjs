import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { PIE_DATA, PIE_REALTIME_DATA } from './data';

type PieDataType = {
  id: string;
  name: string;
  value: number;
};

type PieStoreType = {
  pie: PieDataType[];
  pieRealtime: PieDataType[];
  updatePieRealtime: () => void;
};

export const usePieStore = create<PieStoreType>((set) => ({
  /* Basic */
  pie: PIE_DATA,

  /* Realtime */
  pieRealtime: PIE_REALTIME_DATA,
  updatePieRealtime: () =>
    set((state) => ({
      pieRealtime: state.pieRealtime.map((data) => ({
        ...data,
        value: faker.number.int({ min: 0, max: 100 })
      }))
    }))
}));
