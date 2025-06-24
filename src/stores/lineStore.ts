import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';
import {
  LINE_A_DATA,
  LINE_B_DATA,
  LINE_REALTIME_SLIDE_A_DATA,
  LINE_REALTIME_SLIDE_B_DATA,
  LINE_REALTIME_STACK_A_DATA,
  LINE_REALTIME_STACK_B_DATA
} from './data';

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
