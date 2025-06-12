import axios from 'axios';
import type { BubbleChartDataType } from '../types/chartType';

const API_URL = 'http://localhost:4000';

/* Bubble 차트 데이터 가져오기 */
export const fetchBubbleChartDataAPI = async (): Promise<BubbleChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/bubble_A`), axios.get(`${API_URL}/bubble_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};
