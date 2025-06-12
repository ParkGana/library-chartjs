import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { AreaChartDataType } from '../types/areaType';

const API_URL = 'http://localhost:4000';

/* Area 차트 데이터 가져오기 */
export const fetchAreaChartDataAPI = async (): Promise<AreaChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/area_A`), axios.get(`${API_URL}/area_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Area 차트 데이터 가져오기 (Realtime - Stack) */
export const fetchAreaChartRealtimeStackDataAPI = async (): Promise<AreaChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/area_realtime_stack_A`),
    axios.get(`${API_URL}/area_realtime_stack_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Area 차트 데이터 가져오기 (Realtime - Slide) */
export const fetchAreaChartRealtimeSlideDataAPI = async (): Promise<AreaChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/area_realtime_slide_A`),
    axios.get(`${API_URL}/area_realtime_slide_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Area 차트 데이터 생성 (Realtime - Stack) */
export const createAreaChartRealtimeStackDataAPI = async (xlabel: string): Promise<void> => {
  await Promise.all([
    axios.post(`${API_URL}/area_realtime_stack_A`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) }),
    axios.post(`${API_URL}/area_realtime_stack_B`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) })
  ]);
};

/* Area 차트 데이터 생성 (Realtime - Slide) */
export const createAreaChartRealtimeSlideDataAPI = async (xlabel: string): Promise<void> => {
  await Promise.all([
    axios.post(`${API_URL}/area_realtime_slide_A`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) }),
    axios.post(`${API_URL}/area_realtime_slide_B`, { xlabel, value: faker.number.int({ min: 0, max: 100 }) })
  ]);
};
