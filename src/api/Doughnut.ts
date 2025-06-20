import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { DoughnutChartDataType } from '../types/chartType';

/* Doughnut 차트 데이터 가져오기 */
export const fetchDoughnutChartDataAPI = async (): Promise<DoughnutChartDataType[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/doughnut`);
  return res.data;
};

/* Doughnut 차트 데이터 가져오기 (Realtime) */
export const fetchDoughnutChartRealtimeDataAPI = async (): Promise<DoughnutChartDataType[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/doughnut_realtime`);
  return res.data;
};

/* Doughnut 차트 데이터 수정 (Realtime) */
export const updateDoughnutChartRealtimeDataAPI = async (data: DoughnutChartDataType[]): Promise<void> => {
  await Promise.all(
    data.map((item) =>
      axios.patch(`${import.meta.env.VITE_API_URL}/doughnut_realtime/${item.id}`, {
        value: faker.number.int({ min: 0, max: 100 })
      })
    )
  );
};
