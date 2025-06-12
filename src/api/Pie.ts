import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { PieChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Pie 차트 데이터 가져오기 */
export const fetchPieChartDataAPI = async (): Promise<PieChartDataType[]> => {
  const res = await axios.get(`${API_URL}/pie`);
  return res.data;
};

/* Pie 차트 데이터 가져오기 (Realtime) */
export const fetchPieChartRealtimeDataAPI = async (): Promise<PieChartDataType[]> => {
  const res = await axios.get(`${API_URL}/pie_realtime`);
  return res.data;
};

/* Pie 차트 데이터 수정 (Realtime) */
export const updatePieChartRealtimeDataAPI = async (data: PieChartDataType[]): Promise<void> => {
  await Promise.all(
    data.map((item) =>
      axios.patch(`${API_URL}/pie_realtime/${item.id}`, { value: faker.number.int({ min: 0, max: 100 }) })
    )
  );
};
