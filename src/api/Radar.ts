import axios from 'axios';
import { faker } from '@faker-js/faker';
import type { RadarChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Radar 차트 데이터 가져오기 */
export const fetchRadarChartDataAPI = async (): Promise<RadarChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/radar_A`), axios.get(`${API_URL}/radar_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Radar 차트 데이터 가져오기 (Realtime) */
export const fetchRadarChartRealtimeDataAPI = async (): Promise<RadarChartDataType[]> => {
  const [resA, resB] = await Promise.all([
    axios.get(`${API_URL}/radar_realtime_A`),
    axios.get(`${API_URL}/radar_realtime_B`)
  ]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};

/* Radar 차트 데이터 수정 (Realtime) */
export const updateRadarChartRealtimeDataAPI = async (datas: RadarChartDataType[]): Promise<void> => {
  await Promise.all(
    datas.map(({ name, data }) =>
      data.map((item) =>
        axios.patch(`${API_URL}/radar_realtime_${name}/${item.id}`, { value: faker.number.int({ min: 0, max: 100 }) })
      )
    )
  );
};
