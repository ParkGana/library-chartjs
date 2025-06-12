import axios from 'axios';
import type { AreaChartDataType } from '../types/areaType';

const API_URL = 'http://localhost:4000';

/* Area 차트 데이터 가져오기 */
export const fetchAreaChartDataAPI = async (): Promise<AreaChartDataType[]> => {
  const [resA, resB] = await Promise.all([axios.get(`${API_URL}/area_A`), axios.get(`${API_URL}/area_B`)]);
  return [
    { name: 'A', data: resA.data },
    { name: 'B', data: resB.data }
  ];
};
