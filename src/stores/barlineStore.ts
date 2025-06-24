import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';
import {
  BAR_A_DATA,
  BAR_B_DATA,
  BAR_REALTIME_SLIDE_A_DATA,
  BAR_REALTIME_SLIDE_B_DATA,
  BAR_REALTIME_STACK_A_DATA,
  BAR_REALTIME_STACK_B_DATA,
  LINE_A_DATA,
  LINE_REALTIME_SLIDE_A_DATA,
  LINE_REALTIME_STACK_A_DATA
} from './data';

type BarLineDataType = {
  id: string;
  xlabel: string;
  value: number;
};

type BarLineStoreType = {
  lineA: BarLineDataType[];
  barA: BarLineDataType[];
  barB: BarLineDataType[];
  lineRealtimeStackA: BarLineDataType[];
  createLineRealtimeStackA: () => void;
  barRealtimeStackA: BarLineDataType[];
  createBarRealtimeStackA: () => void;
  barRealtimeStackB: BarLineDataType[];
  createBarRealtimeStackB: () => void;
  lineRealtimeSlideA: BarLineDataType[];
  createLineRealtimeSlideA: () => void;
  barRealtimeSlideA: BarLineDataType[];
  createBarRealtimeSlideA: () => void;
  barRealtimeSlideB: BarLineDataType[];
  createBarRealtimeSlideB: () => void;
};

export const useBarLineStore = create<BarLineStoreType>((set) => ({
  /* Basic */
  lineA: LINE_A_DATA,
  barA: BAR_A_DATA,
  barB: BAR_B_DATA,

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
