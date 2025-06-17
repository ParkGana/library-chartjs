import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { BarListChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Bar + List 차트 데이터 가져오기 */
export const fetchBarListChartDataAPI = async (): Promise<BarListChartDataType[]> => {
  const res = await axios.get(`${API_URL}/bar`);
  return res.data;
};

/* Bar + List 차트 데이터 가져오기 (Realtime) */
export const fetchBarListChartRealtimeDataAPI = async (): Promise<BarListChartDataType[]> => {
  const res = await axios.get(`${API_URL}/bar_realtime`);
  return res.data;
};

/* Bar + List 차트 데이터 수정 (Realtime) */
export const updateBarListChartRealtimeDataAPI = async (data: BarListChartDataType[]): Promise<void> => {
  await Promise.all(
    data.map((item) =>
      axios.patch(`${API_URL}/bar_realtime/${item.id}`, { value: faker.number.int({ min: 0, max: 100 }) })
    )
  );
};
