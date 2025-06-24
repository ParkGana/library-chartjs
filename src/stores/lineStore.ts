import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';

const LINE_A_DATA = [
  { id: '3af7', xlabel: '2021', value: 73 },
  { id: '9f06', xlabel: '2022', value: 25 },
  { id: '87b6', xlabel: '2023', value: 75 },
  { id: '268f', xlabel: '2024', value: 55 },
  { id: '06e1', xlabel: '2025', value: 34 }
];

const LINE_B_DATA = [
  { id: '5a5e', xlabel: '2021', value: 92 },
  { id: '7ca0', xlabel: '2022', value: 35 },
  { id: '6963', xlabel: '2023', value: 48 },
  { id: 'acab', xlabel: '2024', value: 45 },
  { id: '5a25', xlabel: '2025', value: 44 }
];

const LINE_REALTIME_STACK_A_DATA = [
  { id: '0e28', xlabel: '1', value: 89 },
  { id: '60bc', xlabel: '2', value: 61 },
  { id: '49ff', xlabel: '3', value: 18 },
  { id: 'c72b', xlabel: '4', value: 99 },
  { id: 'bf9a', xlabel: '5', value: 17 }
];

const LINE_REALTIME_STACK_B_DATA = [
  { id: '802c', xlabel: '1', value: 48 },
  { id: 'c732', xlabel: '2', value: 29 },
  { id: 'd1b7', xlabel: '3', value: 72 },
  { id: '61da', xlabel: '4', value: 25 },
  { id: 'c86d', xlabel: '5', value: 14 }
];

const LINE_REALTIME_SLIDE_A_DATA = [
  { id: '7047', xlabel: '1', value: 27 },
  { id: '5663', xlabel: '2', value: 8 },
  { id: '60fb', xlabel: '3', value: 26 },
  { id: '519a', xlabel: '4', value: 32 },
  { id: '29c4', xlabel: '5', value: 69 }
];

const LINE_REALTIME_SLIDE_B_DATA = [
  { id: '0988', xlabel: '1', value: 8 },
  { id: '47b0', xlabel: '2', value: 62 },
  { id: 'd927', xlabel: '3', value: 33 },
  { id: '8ff4', xlabel: '4', value: 27 },
  { id: '9924', xlabel: '5', value: 28 }
];

type LineDataType = {
  id: string;
  xlabel: string;
  value: number;
};

type LineStoreType = {
  lineA: LineDataType[];
  lineB: LineDataType[];
  lineRealtimeStackA: LineDataType[];
  createLineRealtimeStackA: () => void;
  lineRealtimeStackB: LineDataType[];
  createLineRealtimeStackB: () => void;
  lineRealtimeSlideA: LineDataType[];
  createLineRealtimeSlideA: () => void;
  lineRealtimeSlideB: LineDataType[];
  createLineRealtimeSlideB: () => void;
};

export const useLineStore = create<LineStoreType>((set) => ({
  /* Basic */
  lineA: LINE_A_DATA,
  lineB: LINE_B_DATA,

  /* Realtime (Stack) */
  lineRealtimeStackA: LINE_REALTIME_STACK_A_DATA,
  createLineRealtimeStackA: () =>
    set((state) => ({
      lineRealtimeStackA: [
        ...state.lineRealtimeStackA,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.lineRealtimeStackA.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  lineRealtimeStackB: LINE_REALTIME_STACK_B_DATA,
  createLineRealtimeStackB: () =>
    set((state) => ({
      lineRealtimeStackB: [
        ...state.lineRealtimeStackB,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.lineRealtimeStackB.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),

  /* Realtime (Slide) */
  lineRealtimeSlideA: LINE_REALTIME_SLIDE_A_DATA,
  createLineRealtimeSlideA: () =>
    set((state) => ({
      lineRealtimeSlideA: [
        ...state.lineRealtimeSlideA,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.lineRealtimeSlideA.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    })),
  lineRealtimeSlideB: LINE_REALTIME_SLIDE_B_DATA,
  createLineRealtimeSlideB: () =>
    set((state) => ({
      lineRealtimeSlideB: [
        ...state.lineRealtimeSlideB,
        {
          id: generateRandomId(),
          xlabel: String(Number(state.lineRealtimeSlideB.slice(-1)[0].xlabel) + 1),
          value: faker.number.int({ min: 0, max: 100 })
        }
      ]
    }))
}));
