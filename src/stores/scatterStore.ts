import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';
import { SCATTER_A_DATA, SCATTER_B_DATA, SCATTER_REALTIME_A_DATA, SCATTER_REALTIME_B_DATA } from './data';

type ScatterDataType = {
  id: string;
  xvalue: number;
  yvalue: number;
};

type ScatterStoreType = {
  scatterA: ScatterDataType[];
  scatterB: ScatterDataType[];
  scatterRealtimeA: ScatterDataType[];
  createScatterRealtimeA: () => void;
  scatterRealtimeB: ScatterDataType[];
  createScatterRealtimeB: () => void;
};

export const useScatterStore = create<ScatterStoreType>((set) => ({
  /* Basic */
  scatterA: SCATTER_A_DATA,
  scatterB: SCATTER_B_DATA,

  /* Realtime */
  scatterRealtimeA: SCATTER_REALTIME_A_DATA,
  createScatterRealtimeA: () =>
    set((state) => ({
      scatterRealtimeA: [
        ...state.scatterRealtimeA,
        {
          id: generateRandomId(),
          xvalue: faker.number.int({ min: 0, max: 100 }),
          yvalue: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  scatterRealtimeB: SCATTER_REALTIME_B_DATA,
  createScatterRealtimeB: () =>
    set((state) => ({
      scatterRealtimeB: [
        ...state.scatterRealtimeB,
        {
          id: generateRandomId(),
          xvalue: faker.number.int({ min: 0, max: 100 }),
          yvalue: faker.number.int({ min: 0, max: 100 })
        }
      ]
    }))
}));
