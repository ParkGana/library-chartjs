import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { generateRandomId } from '../utils/generateRandomId';
import {
  AREA_A_DATA,
  AREA_B_DATA,
  AREA_REALTIME_SLIDE_A_DATA,
  AREA_REALTIME_SLIDE_B_DATA,
  AREA_REALTIME_STACK_A_DATA,
  AREA_REALTIME_STACK_B_DATA
} from './data';

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
