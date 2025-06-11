import { useQuery } from '@tanstack/react-query';
import { fetchBarChartDataAPI } from '../../api/Bar';

export const useBar = () => {
  /* Bar 차트 데이터 가져오기 */
  const fetchBarChartDataQuery = useQuery({
    queryKey: ['bar'],
    queryFn: fetchBarChartDataAPI
  });

  return { fetchBarChartDataQuery };
};
