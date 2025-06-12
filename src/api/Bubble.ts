import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { BubbleChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Bubble 차트 데이터 가져오기 */
export const fetchBubbleChartDataAPI = async (): Promise<BubbleChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/bubble_A`), axios.get(`${API_URL}/bubble_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Bubble 차트 데이터 가져오기 (Realtime) */
export const fetchBubbleChartRealtimeDataAPI = async (): Promise<BubbleChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/bubble_realtime_A`),
    axios.get(`${API_URL}/bubble_realtime_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Bubble 차트 데이터 생성 (Realtime) */
export const createBubbleChartRealtimeDataAPI = async (): Promise<void> => {
  await Promise.all([
    axios.post(`${API_URL}/bubble_realtime_A`, {
      xvalue: faker.number.int({ min: 0, max: 100 }),
      yvalue: faker.number.int({ min: 0, max: 100 }),
      rvalue: faker.number.int({ min: 5, max: 20 })
    }),
    axios.post(`${API_URL}/bubble_realtime_B`, {
      xvalue: faker.number.int({ min: 0, max: 100 }),
      yvalue: faker.number.int({ min: 0, max: 100 }),
      rvalue: faker.number.int({ min: 5, max: 20 })
    })
  ]);
};
