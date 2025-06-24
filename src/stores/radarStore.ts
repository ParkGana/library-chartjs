import { create } from 'zustand';
import { faker } from '@faker-js/faker';
import { RADAR_A_DATA, RADAR_B_DATA, RADAR_REALTIME_A_DATA, RADAR_REALTIME_B_DATA } from './data';

type RadarDataType = {
  id: string;
  category: string;
  value: number;
};

type RadarStoreType = {
  radarA: RadarDataType[];
  radarB: RadarDataType[];
  radarRealtimeA: RadarDataType[];
  updateRadarRealtimeA: () => void;
  radarRealtimeB: RadarDataType[];
  updateRadarRealtimeB: () => void;
};

export const useRadarStore = create<RadarStoreType>((set) => ({
  /* Basic */
  radarA: RADAR_A_DATA,
  radarB: RADAR_B_DATA,

  /* Realtime */
  radarRealtimeA: RADAR_REALTIME_A_DATA,
  updateRadarRealtimeA: () =>
    set((state) => ({
      radarRealtimeA: state.radarRealtimeA.map((data) => ({
        ...data,
        value: faker.number.int({ min: 0, max: 100 })
      }))
    })),
  radarRealtimeB: RADAR_REALTIME_B_DATA,
  updateRadarRealtimeB: () =>
    set((state) => ({
      radarRealtimeB: state.radarRealtimeB.map((data) => ({
        ...data,
        value: faker.number.int({ min: 0, max: 100 })
      }))
    }))
}));
