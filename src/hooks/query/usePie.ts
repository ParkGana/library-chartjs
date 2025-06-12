import { useQuery } from '@tanstack/react-query';
import { fetchPieChartDataAPI } from '../../api/Pie';

export const usePie = () => {
  /* Pie 차트 데이터 가져오기 */
  const fetchPieChartDataQuery = useQuery({
    queryKey: ['pie'],
    queryFn: fetchPieChartDataAPI
  });

  return { fetchPieChartDataQuery };
};
