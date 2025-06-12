import axios from 'axios';
import type { DoughnutChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Doughnut 차트 데이터 가져오기 */
export const fetchDoughnutChartDataAPI = async (): Promise<DoughnutChartDataType[]> => {
  const res = await axios.get(`${API_URL}/doughnut`);
  return res.data;
};
