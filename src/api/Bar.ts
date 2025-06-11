import axios from 'axios';
import type { BarChartDataType } from '../types/barType';

const API_URL = 'http://localhost:4000';

/* Bar 차트 데이터 가져오기 */
export const fetchBarChartDataAPI = async (): Promise<BarChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/bar_A`), axios.get(`${API_URL}/bar_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};
