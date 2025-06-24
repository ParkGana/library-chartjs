import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';

const AREA_A_DATA = [
  { id: '0c53', xlabel: '2021', value: 54 },
  { id: 'cb3b', xlabel: '2022', value: 32 },
  { id: 'deea', xlabel: '2023', value: 10 },
  { id: '464c', xlabel: '2024', value: 95 },
  { id: 'ba47', xlabel: '2025', value: 8 }
];

const AREA_B_DATA = [
  { id: 'fb33', xlabel: '2021', value: 100 },
  { id: 'a6fc', xlabel: '2022', value: 72 },
  { id: 'c5b2', xlabel: '2023', value: 73 },
  { id: '28ec', xlabel: '2024', value: 25 },
  { id: 'd0c4', xlabel: '2025', value: 10 }
];

const AREA_REALTIME_STACK_A_DATA = [
  { id: '5608', xlabel: '1', value: 47 },
  { id: 'd556', xlabel: '2', value: 55 },
  { id: 'e68a', xlabel: '3', value: 56 },
  { id: 'd7c0', xlabel: '4', value: 15 },
  { id: '4576', xlabel: '5', value: 78 }
];

const AREA_REALTIME_STACK_B_DATA = [
  { id: '775e', xlabel: '1', value: 83 },
  { id: 'e537', xlabel: '2', value: 56 },
  { id: '1151', xlabel: '3', value: 22 },
  { id: 'a8c6', xlabel: '4', value: 60 },
  { id: '8fc8', xlabel: '5', value: 21 }
];

const AREA_REALTIME_SLIDE_A_DATA = [
  { id: '909c', xlabel: '1', value: 61 },
  { id: 'b126', xlabel: '2', value: 27 },
  { id: '385d', xlabel: '3', value: 84 },
  { id: '5d4d', xlabel: '4', value: 25 },
  { id: '9784', xlabel: '5', value: 51 }
];

const AREA_REALTIME_SLIDE_B_DATA = [
  { id: '2bbd', xlabel: '1', value: 92 },
  { id: '68b5', xlabel: '2', value: 55 },
  { id: 'cb7d', xlabel: '3', value: 26 },
  { id: '233e', xlabel: '4', value: 2 },
  { id: 'ef42', xlabel: '5', value: 65 }
];

type AreaDataType = {
  id: string;
  xlabel: string;
  value: number;
};

type AreaStoreType = {
  areaA: AreaDataType[];
  areaB: AreaDataType[];
  areaRealtimeStackA: AreaDataType[];
  createAreaRealtimeStackA: () => void;
  areaRealtimeStackB: AreaDataType[];
  createAreaRealtimeStackB: () => void;
  areaRealtimeSlideA: AreaDataType[];
  createAreaRealtimeSlideA: () => void;
  areaRealtimeSlideB: AreaDataType[];
  createAreaRealtimeSlideB: () => void;
};

export const useAreaStore = create<AreaStoreType>((set) => ({
  /* Basic */
  areaA: AREA_A_DATA,
  areaB: AREA_B_DATA,

  /* Realtime (Stack) */
  areaRealtimeStackA: AREA_REALTIME_STACK_A_DATA,
  createAreaRealtimeStackA: () =>
    set((state) => ({
      areaRealtimeStackA: [
        ...state.areaRealtimeStackA,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.areaRealtimeStackA.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  areaRealtimeStackB: AREA_REALTIME_STACK_B_DATA,
  createAreaRealtimeStackB: () =>
    set((state) => ({
      areaRealtimeStackB: [
        ...state.areaRealtimeStackB,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.areaRealtimeStackB.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),

  /* Realtime (Slide) */
  areaRealtimeSlideA: AREA_REALTIME_SLIDE_A_DATA,
  createAreaRealtimeSlideA: () =>
    set((state) => ({
      areaRealtimeSlideA: [
        ...state.areaRealtimeSlideA,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.areaRealtimeSlideA.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  areaRealtimeSlideB: AREA_REALTIME_SLIDE_B_DATA,
  createAreaRealtimeSlideB: () =>
    set((state) => ({
      areaRealtimeSlideB: [
        ...state.areaRealtimeSlideB,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.areaRealtimeSlideB.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    }))
}));
