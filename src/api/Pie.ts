import axios from 'axios';
import type { PieChartDataType } from '../types/pieType';

const API_URL = 'http://localhost:4000';

/* Pie 차트 데이터 가져오기 */
export const fetchPieChartDataAPI = async (): Promise<PieChartDataType[]> => {
  const res = await axios.get(`${API_URL}/pie`);
  return res.data;
};
