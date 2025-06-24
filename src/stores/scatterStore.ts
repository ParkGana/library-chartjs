import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';

const SCATTER_A_DATA = [
  { id: 'a966', xvalue: 22, yvalue: 29 },
  { id: 'aa66', xvalue: 47, yvalue: 57 },
  { id: '5988', xvalue: 51, yvalue: 66 },
  { id: '76d1', xvalue: 85, yvalue: 76 },
  { id: '6d9c', xvalue: 54, yvalue: 35 },
  { id: '12e0', xvalue: 9, yvalue: 50 },
  { id: 'c099', xvalue: 13, yvalue: 3 },
  { id: 'f124', xvalue: 37, yvalue: 68 },
  { id: '6e0c', xvalue: 68, yvalue: 36 },
  { id: '5d45', xvalue: 75, yvalue: 14 }
];

const SCATTER_B_DATA = [
  { id: 'e38e', xvalue: 40, yvalue: 66 },
  { id: 'e41c', xvalue: 60, yvalue: 32 },
  { id: '1929', xvalue: 86, yvalue: 7 },
  { id: '032a', xvalue: 44, yvalue: 95 },
  { id: '4b11', xvalue: 36, yvalue: 10 },
  { id: 'bca8', xvalue: 83, yvalue: 58 },
  { id: 'c4dd', xvalue: 73, yvalue: 94 },
  { id: '99ce', xvalue: 39, yvalue: 74 },
  { id: '87bb', xvalue: 57, yvalue: 52 },
  { id: '570d', xvalue: 3, yvalue: 22 }
];

const SCATTER_REALTIME_A_DATA = [
  { id: '8645', xvalue: 79, yvalue: 34 },
  { id: '98fe', xvalue: 3, yvalue: 69 },
  { id: 'b7d1', xvalue: 16, yvalue: 71 },
  { id: '8b41', xvalue: 30, yvalue: 24 },
  { id: '5f22', xvalue: 31, yvalue: 96 },
  { id: 'd516', xvalue: 7, yvalue: 46 },
  { id: '8bbe', xvalue: 70, yvalue: 18 },
  { id: '812b', xvalue: 87, yvalue: 31 },
  { id: '616e', xvalue: 98, yvalue: 24 },
  { id: 'b9be', xvalue: 28, yvalue: 79 }
];

const SCATTER_REALTIME_B_DATA = [
  { id: '38c1', xvalue: 54, yvalue: 41 },
  { id: '124a', xvalue: 97, yvalue: 94 },
  { id: '42f3', xvalue: 62, yvalue: 28 },
  { id: '2815', xvalue: 37, yvalue: 68 },
  { id: '6e00', xvalue: 46, yvalue: 66 },
  { id: '694b', xvalue: 81, yvalue: 86 },
  { id: 'f864', xvalue: 15, yvalue: 48 },
  { id: 'e257', xvalue: 24, yvalue: 72 },
  { id: '860e', xvalue: 24, yvalue: 8 },
  { id: '5953', xvalue: 57, yvalue: 20 }
];

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
