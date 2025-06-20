import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { BarLineChartDataType } from '../types/chartType';

/* Bar + Line 차트 데이터 가져오기 */
export const fetchBarLineChartDataAPI = async (): Promise<BarLineChartDataType[]> => {
  const [resA, resB, resC] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/line_A`),
    axios.get(`${import.meta.env.VITE_API_URL}/bar_A`),
    axios.get(`${import.meta.env.VITE_API_URL}/bar_B`)
  ]);
  return [
    { name: 'A', data: resA.data, type: 'line' },
    { name: 'B', data: resB.data, type: 'bar' },
    { name: 'C', data: resC.data, type: 'bar' }
  ];
};

/* Bar + Line 차트 데이터 가져오기 (Realtime - Stack) */
export const fetchBarLineChartRealtimeStackDataAPI = async (): Promise<BarLineChartDataType[]> => {
  const [resA, resB, resC] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/line_realtime_stack_A`),
    axios.get(`${import.meta.env.VITE_API_URL}/bar_realtime_stack_A`),
    axios.get(`${import.meta.env.VITE_API_URL}/bar_realtime_stack_B`)
  ]);
  return [
    { name: 'A', data: resA.data, type: 'line' },
    { name: 'B', data: resB.data, type: 'bar' },
    { name: 'C', data: resC.data, type: 'bar' }
  ];
};

/* Bar + Line 차트 데이터 가져오기 (Realtime - Slide) */
export const fetchBarLineChartRealtimeSlideDataAPI = async (): Promise<BarLineChartDataType[]> => {
  const [resA, resB, resC] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/line_realtime_slide_A`),
    axios.get(`${import.meta.env.VITE_API_URL}/bar_realtime_slide_A`),
    axios.get(`${import.meta.env.VITE_API_URL}/bar_realtime_slide_B`)
  ]);
  return [
    { name: 'A', data: resA.data, type: 'line' },
    { name: 'B', data: resB.data, type: 'bar' },
    { name: 'C', data: resC.data, type: 'bar' }
  ];
};

/* Bar + Line 차트 데이터 생성 (Realtime - Stack) */
export const createBarLineChartRealtimeStackDataAPI = async (xlabel: string): Promise<void> => {
  await Promise.all([
    axios.post(`${import.meta.env.VITE_API_URL}/line_realtime_stack_A`, {
      xlabel,
      value: faker.number.int({ min: 0, max: 100 })
    }),
    axios.post(`${import.meta.env.VITE_API_URL}/bar_realtime_stack_A`, {
      xlabel,
      value: faker.number.int({ min: 0, max: 100 })
    }),
    axios.post(`${import.meta.env.VITE_API_URL}/bar_realtime_stack_B`, {
      xlabel,
      value: faker.number.int({ min: 0, max: 100 })
    })
  ]);
};

/* Bar + Line 차트 데이터 생성 (Realtime - Slide) */
export const createBarLineChartRealtimeSlideDataAPI = async (xlabel: string): Promise<void> => {
  await Promise.all([
    axios.post(`${import.meta.env.VITE_API_URL}/line_realtime_slide_A`, {
      xlabel,
      value: faker.number.int({ min: 0, max: 100 })
    }),
    axios.post(`${import.meta.env.VITE_API_URL}/bar_realtime_slide_A`, {
      xlabel,
      value: faker.number.int({ min: 0, max: 100 })
    }),
    axios.post(`${import.meta.env.VITE_API_URL}/bar_realtime_slide_B`, {
      xlabel,
      value: faker.number.int({ min: 0, max: 100 })
    })
  ]);
};
