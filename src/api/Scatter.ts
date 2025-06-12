import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { ScatterChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Scatter 차트 데이터 가져오기 */
export const fetchScatterChartDataAPI = async (): Promise<ScatterChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/scatter_A`), axios.get(`${API_URL}/scatter_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Scatter 차트 데이터 가져오기 (Realtime) */
export const fetchScatterChartRealtimeDataAPI = async (): Promise<ScatterChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/scatter_realtime_A`),
    axios.get(`${API_URL}/scatter_realtime_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Scatter 차트 데이터 생성 (Realtime) */
export const createScatterChartRealtimeDataAPI = async (): Promise<void> => {
  await Promise.all([
    axios.post(`${API_URL}/scatter_realtime_A`, {
      xvalue: faker.number.int({ min: 0, max: 100 }),
      yvalue: faker.number.int({ min: 0, max: 100 })
    }),
    axios.post(`${API_URL}/scatter_realtime_B`, {
      xvalue: faker.number.int({ min: 0, max: 100 }),
      yvalue: faker.number.int({ min: 0, max: 100 })
    })
  ]);
};
