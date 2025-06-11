import axios from 'axios';
import type { BarLineChartDataType } from '../types/barlineType';

const API_URL = 'http://localhost:4000';

/* Bar + Line 차트 데이터 가져오기 */
export const fetchBarLineChartDataAPI = async (): Promise<BarLineChartDataType[]> => {
  const [resA, resB, resC] = await Promise.all([
    axios.get(`${API_URL}/line_A`),
    axios.get(`${API_URL}/bar_A`),
    axios.get(`${API_URL}/bar_B`)
  ]);
  return [
    { name: 'A', data: resA.data, type: 'line' },
    { name: 'B', data: resB.data, type: 'bar' },
    { name: 'C', data: resC.data, type: 'bar' }
  ];
};
