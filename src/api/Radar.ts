import axios from 'axios';
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
