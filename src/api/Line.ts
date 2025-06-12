import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { LineChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Line 차트 데이터 가져오기 */
export const fetchLineChartDataAPI = async (): Promise<LineChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/line_A`), axios.get(`${API_URL}/line_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Line 차트 데이터 가져오기 (Realtime - Stack) */
export const fetchLineChartRealtimeStackDataAPI = async (): Promise<LineChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/line_realtime_stack_A`),
    axios.get(`${API_URL}/line_realtime_stack_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Line 차트 데이터 가져오기 (Realtime - Slide) */
export const fetchLineChartRealtimeSlideDataAPI = async (): Promise<LineChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/line_realtime_slide_A`),
    axios.get(`${API_URL}/line_realtime_slide_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Line 차트 데이터 생성 (Realtime - Stack) */
export const createLineChartRealtimeStackDataAPI = async (xlabel: string) => {
  await Promise.all([
    axios.post(`${API_URL}/line_realtime_stack_A`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) }),
    axios.post(`${API_URL}/line_realtime_stack_B`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) })
  ]);
};

/* Line 차트 데이터 생성 (Realtime - Slide) */
export const createLineChartRealtimeSlideDataAPI = async (xlabel: string) => {
  await Promise.all([
    axios.post(`${API_URL}/line_realtime_slide_A`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) }),
    axios.post(`${API_URL}/line_realtime_slide_B`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) })
  ]);
};
