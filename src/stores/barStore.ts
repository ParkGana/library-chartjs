import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';
import {
  BAR_A_DATA,
  BAR_B_DATA,
  BAR_REALTIME_SLIDE_A_DATA,
  BAR_REALTIME_SLIDE_B_DATA,
  BAR_REALTIME_STACK_A_DATA,
  BAR_REALTIME_STACK_B_DATA
} from './data';

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
