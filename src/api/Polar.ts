import axios from 'axios';
import type { PolarChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Polar 차트 데이터 가져오기 */
export const fetchPolarChartDataAPI = async (): Promise<PolarChartDataType[]> => {
  const res = await axios.get(`${API_URL}/polar`);
  return res.data;
};
