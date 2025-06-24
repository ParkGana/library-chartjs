import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';
import { BUBBLE_A_DATA, BUBBLE_B_DATA, BUBBLE_REALTIME_A_DATA, BUBBLE_REALTIME_B_DATA } from './data';

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
