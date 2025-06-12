import axios from 'axios';
import type { ScatterChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Scatter 차트 데이터 가져오기 */
export const fetchScatterChartDataAPI = async (): Promise<ScatterChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/scatter_A`), axios.get(`${API_URL}/scatter_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};
