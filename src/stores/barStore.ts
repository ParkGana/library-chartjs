import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';

const BAR_A_DATA = [
  { id: '80ff', xlabel: '2021', value: 33 },
  { id: '84e8', xlabel: '2022', value: 19 },
  { id: '3e1e', xlabel: '2023', value: 42 },
  { id: 'f3ae', xlabel: '2024', value: 48 },
  { id: '2c95', xlabel: '2025', value: 14 }
];

const BAR_B_DATA = [
  { id: '589d', xlabel: '2021', value: 61 },
  { id: '89c4', xlabel: '2022', value: 66 },
  { id: 'b7e3', xlabel: '2023', value: 87 },
  { id: '6371', xlabel: '2024', value: 57 },
  { id: '5356', xlabel: '2025', value: 72 }
];

const BAR_REALTIME_STACK_A_DATA = [
  { id: '1a37', xlabel: '1', value: 25 },
  { id: 'ac94', xlabel: '2', value: 31 },
  { id: '9d80', xlabel: '3', value: 81 },
  { id: '7f21', xlabel: '4', value: 61 },
  { id: '9540', xlabel: '5', value: 3 }
];

const BAR_REALTIME_STACK_B_DATA = [
  { id: '38ca', xlabel: '1', value: 37 },
  { id: '7c28', xlabel: '2', value: 19 },
  { id: 'c575', xlabel: '3', value: 19 },
  { id: 'd066', xlabel: '4', value: 20 },
  { id: 'c2d7', xlabel: '5', value: 11 }
];

const BAR_REALTIME_SLIDE_A_DATA = [
  { id: 'c710', xlabel: '1', value: 84 },
  { id: '74f0', xlabel: '2', value: 4 },
  { id: '3258', xlabel: '3', value: 28 },
  { id: 'ea15', xlabel: '4', value: 22 },
  { id: '7d03', xlabel: '5', value: 95 }
];

const BAR_REALTIME_SLIDE_B_DATA = [
  { id: '7b03', xlabel: '1', value: 74 },
  { id: '6811', xlabel: '2', value: 99 },
  { id: '8085', xlabel: '3', value: 100 },
  { id: '797e', xlabel: '4', value: 59 },
  { id: 'c994', xlabel: '5', value: 14 }
];

type BarDataType = {
  id: string;
  xlabel: string;
  value: number;
};

type BarStoreType = {
  barA: BarDataType[];
  barB: BarDataType[];
  barRealtimeStackA: BarDataType[];
  createBarRealtimeStackA: () => void;
  barRealtimeStackB: BarDataType[];
  createBarRealtimeStackB: () => void;
  barRealtimeSlideA: BarDataType[];
  createBarRealtimeSlideA: () => void;
  barRealtimeSlideB: BarDataType[];
  createBarRealtimeSlideB: () => void;
};

export const useBarStore = create<BarStoreType>((set) => ({
  /* Basic */
  barA: BAR_A_DATA,
  barB: BAR_B_DATA,

  /* Realtime (Stack) */
  barRealtimeStackA: BAR_REALTIME_STACK_A_DATA,
  createBarRealtimeStackA: () =>
    set((state) => ({
      barRealtimeStackA: [
        ...state.barRealtimeStackA,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.barRealtimeStackA.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  barRealtimeStackB: BAR_REALTIME_STACK_B_DATA,
  createBarRealtimeStackB: () =>
    set((state) => ({
      barRealtimeStackB: [
        ...state.barRealtimeStackB,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.barRealtimeStackB.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),

  /* Realtime (Slide) */
  barRealtimeSlideA: BAR_REALTIME_SLIDE_A_DATA,
  createBarRealtimeSlideA: () =>
    set((state) => ({
      barRealtimeSlideA: [
        ...state.barRealtimeSlideA,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.barRealtimeSlideA.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  barRealtimeSlideB: BAR_REALTIME_SLIDE_B_DATA,
  createBarRealtimeSlideB: () =>
    set((state) => ({
      barRealtimeSlideB: [
        ...state.barRealtimeSlideB,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.barRealtimeSlideB.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    }))
}));
