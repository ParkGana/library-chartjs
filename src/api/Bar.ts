import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { BarChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Bar 차트 데이터 가져오기 */
export const fetchBarChartDataAPI = async (): Promise<BarChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/bar_A`), axios.get(`${API_URL}/bar_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Bar 차트 데이터 가져오기 (Realtime - Stack) */
export const fetchBarChartRealtimeStackDataAPI = async (): Promise<BarChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/bar_realtime_stack_A`),
    axios.get(`${API_URL}/bar_realtime_stack_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Bar 차트 데이터 가져오기 (Realtime - Slide) */
export const fetchBarChartRealtimeSlideDataAPI = async (): Promise<BarChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/bar_realtime_slide_A`),
    axios.get(`${API_URL}/bar_realtime_slide_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Bar 차트 데이터 생성 (Realtime - Stack) */
export const createBarChartRealtimeStackDataAPI = async (xlabel: string): Promise<void> => {
  await Promise.all([
    axios.post(`${API_URL}/bar_realtime_stack_A`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) }),
    axios.post(`${API_URL}/bar_realtime_stack_B`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) })
  ]);
};

/* Bar 차트 데이터 생성 (Realtime - Slide) */
export const createBarChartRealtimeSlideDataAPI = async (xlabel: string): Promise<void> => {
  await Promise.all([
    axios.post(`${API_URL}/bar_realtime_slide_A`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) }),
    axios.post(`${API_URL}/bar_realtime_slide_B`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) })
  ]);
};
