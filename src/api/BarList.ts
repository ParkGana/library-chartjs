import axios from 'axios';
import type { BarListChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Bar + List 차트 데이터 가져오기 */
export const fetchBarListChartDataAPI = async (): Promise<BarListChartDataType[]> => {
  const res = await axios.get(`${API_URL}/bar`);
  return res.data;
};
