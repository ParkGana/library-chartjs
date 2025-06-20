import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { PolarChartDataType } from '../types/chartType';

/* Polar 차트 데이터 가져오기 */
export const fetchPolarChartDataAPI = async (): Promise<PolarChartDataType[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/polar`);
  return res.data;
};

/* Polar 차트 데이터 가져오기 (Realtime) */
export const fetchPolarChartRealtimeDataAPI = async (): Promise<PolarChartDataType[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/polar_realtime`);
  return res.data;
};

/* Polar 차트 데이터 수정 (Realtime) */
export const updatePolarChartRealtimeDataAPI = async (data: PolarChartDataType[]): Promise<void> => {
  await Promise.all(
    data.map((item) =>
      axios.patch(`${import.meta.env.VITE_API_URL}/polar_realtime/${item.id}`, {
        value: faker.number.int({ min: 0, max: 100 })
      })
    )
  );
};
