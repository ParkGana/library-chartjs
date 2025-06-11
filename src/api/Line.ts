import axios from 'axios';
import type { LineChartDataType } from '../types/lineType';

const API_URL = 'http://localhost:4000';

/* Line 차트 데이터 가져오기 */
export const fetchLineChartDataAPI = async (): Promise<LineChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/line_A`), axios.get(`${API_URL}/line_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};
