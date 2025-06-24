import { create } from 'zustand';
import { faker } from '@faker-js/faker';

const RADAR_A_DATA = [
  { id: 'e613', category: '주의력', value: 65 },
  { id: '2bbd', category: '사고력', value: 91 },
  { id: '51c9', category: '창의력', value: 25 },
  { id: '3858', category: '기억력', value: 2 },
  { id: '572d', category: '판단력', value: 48 }
];

const RADAR_B_DATA = [
  { id: '89a8', category: '주의력', value: 93 },
  { id: 'bd9a', category: '사고력', value: 53 },
  { id: '143e', category: '창의력', value: 52 },
  { id: '2882', category: '기억력', value: 65 },
  { id: '4fbb', category: '판단력', value: 78 }
];

const RADAR_REALTIME_A_DATA = [
  { id: 'e613', category: '주의력', value: 36 },
  { id: '2bbd', category: '사고력', value: 78 },
  { id: '51c9', category: '창의력', value: 28 },
  { id: '3858', category: '기억력', value: 92 },
  { id: '572d', category: '판단력', value: 80 }
];

const RADAR_REALTIME_B_DATA = [
  { id: '89a8', category: '주의력', value: 82 },
  { id: 'bd9a', category: '사고력', value: 49 },
  { id: '143e', category: '창의력', value: 89 },
  { id: '2882', category: '기억력', value: 31 },
  { id: '4fbb', category: '판단력', value: 81 }
];

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
