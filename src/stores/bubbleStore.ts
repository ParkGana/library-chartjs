import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';

const BUBBLE_A_DATA = [
  { id: '86ab', xvalue: 60, yvalue: 32, rvalue: 17 },
  { id: '18b2', xvalue: 21, yvalue: 96, rvalue: 18 },
  { id: '7311', xvalue: 86, yvalue: 16, rvalue: 16 },
  { id: '801e', xvalue: 100, yvalue: 22, rvalue: 12 },
  { id: 'cc58', xvalue: 46, yvalue: 32, rvalue: 14 },
  { id: '5694', xvalue: 20, yvalue: 19, rvalue: 6 },
  { id: 'a9b0', xvalue: 36, yvalue: 77, rvalue: 6 },
  { id: '1ff9', xvalue: 15, yvalue: 24, rvalue: 16 },
  { id: '3c61', xvalue: 20, yvalue: 73, rvalue: 18 },
  { id: 'ae74', xvalue: 56, yvalue: 35, rvalue: 18 }
];

const BUBBLE_B_DATA = [
  { id: '882a', xvalue: 24, yvalue: 40, rvalue: 15 },
  { id: 'a0be', xvalue: 51, yvalue: 8, rvalue: 16 },
  { id: 'db81', xvalue: 68, yvalue: 88, rvalue: 6 },
  { id: '943a', xvalue: 67, yvalue: 83, rvalue: 11 },
  { id: '9493', xvalue: 18, yvalue: 92, rvalue: 6 },
  { id: 'c96c', xvalue: 54, yvalue: 41, rvalue: 6 },
  { id: '4997', xvalue: 33, yvalue: 51, rvalue: 15 },
  { id: '1a77', xvalue: 83, yvalue: 72, rvalue: 14 },
  { id: '1cc6', xvalue: 98, yvalue: 6, rvalue: 12 },
  { id: '693b', xvalue: 92, yvalue: 1, rvalue: 20 }
];

const BUBBLE_REALTIME_A_DATA = [
  { id: '02a4', xvalue: 48, yvalue: 22, rvalue: 11 },
  { id: 'ede5', xvalue: 48, yvalue: 65, rvalue: 14 },
  { id: '9fde', xvalue: 8, yvalue: 36, rvalue: 8 },
  { id: '742a', xvalue: 48, yvalue: 15, rvalue: 16 },
  { id: '9fca', xvalue: 25, yvalue: 36, rvalue: 17 },
  { id: '2ba8', xvalue: 14, yvalue: 46, rvalue: 18 },
  { id: '3d12', xvalue: 73, yvalue: 28, rvalue: 20 },
  { id: '9b78', xvalue: 40, yvalue: 90, rvalue: 7 },
  { id: 'f5d5', xvalue: 55, yvalue: 86, rvalue: 16 },
  { id: '36ae', xvalue: 44, yvalue: 7, rvalue: 7 }
];

const BUBBLE_REALTIME_B_DATA = [
  { id: '2ad8', xvalue: 88, yvalue: 87, rvalue: 9 },
  { id: '51bb', xvalue: 77, yvalue: 34, rvalue: 13 },
  { id: '9360', xvalue: 82, yvalue: 39, rvalue: 15 },
  { id: 'c832', xvalue: 64, yvalue: 35, rvalue: 11 },
  { id: '36ae', xvalue: 48, yvalue: 100, rvalue: 17 },
  { id: '2a50', xvalue: 12, yvalue: 35, rvalue: 6 },
  { id: '67d0', xvalue: 43, yvalue: 88, rvalue: 15 },
  { id: '673a', xvalue: 59, yvalue: 7, rvalue: 19 },
  { id: '4273', xvalue: 30, yvalue: 34, rvalue: 12 },
  { id: 'ebc6', xvalue: 82, yvalue: 36, rvalue: 17 }
];

type BubbleDataType = {
  id: string;
  xvalue: number;
  yvalue: number;
  rvalue: number;
};

type BubbleStoreType = {
  bubbleA: BubbleDataType[];
  bubbleB: BubbleDataType[];
  bubbleRealtimeA: BubbleDataType[];
  createBubbleRealtimeA: () => void;
  bubbleRealtimeB: BubbleDataType[];
  createBubbleRealtimeB: () => void;
};

export const useBubbleStore = create<BubbleStoreType>((set) => ({
  /* Basic */
  bubbleA: BUBBLE_A_DATA,
  bubbleB: BUBBLE_B_DATA,

  /* Realtime */
  bubbleRealtimeA: BUBBLE_REALTIME_A_DATA,
  createBubbleRealtimeA: () =>
    set((state) => ({
      bubbleRealtimeA: [
        ...state.bubbleRealtimeA,
        {
          id: generateRandomId(),
          xvalue: faker.number.int({ min: 0, max: 100 }),
          yvalue: faker.number.int({ min: 0, max: 100 }),
          rvalue: faker.number.int({ min: 5, max: 20 })
        }
      ]
    })),
  bubbleRealtimeB: BUBBLE_REALTIME_B_DATA,
  createBubbleRealtimeB: () =>
    set((state) => ({
      bubbleRealtimeB: [
        ...state.bubbleRealtimeB,
        {
          id: generateRandomId(),
          xvalue: faker.number.int({ min: 0, max: 100 }),
          yvalue: faker.number.int({ min: 0, max: 100 }),
          rvalue: faker.number.int({ min: 5, max: 20 })
        }
      ]
    }))
}));
