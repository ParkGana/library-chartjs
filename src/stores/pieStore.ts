import { create } from 'zustand';
import { faker } from '@faker-js/faker';

const PIE_DATA = [
  { id: '9277', name: 'A', value: 44 },
  { id: '2929', name: 'B', value: 82 },
  { id: 'e334', name: 'C', value: 94 },
  { id: '8296', name: 'D', value: 11 },
  { id: 'deac', name: 'E', value: 82 }
];

const PIE_REALTIME_DATA = [
  { id: 'cdfe', name: 'A', value: 67 },
  { id: '7774', name: 'B', value: 88 },
  { id: '58b3', name: 'C', value: 40 },
  { id: '14b3', name: 'D', value: 5 },
  { id: 'effe', name: 'E', value: 35 }
];

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
