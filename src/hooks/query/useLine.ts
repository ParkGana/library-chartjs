import { useQuery } from '@tanstack/react-query';
import { fetchLineChartDataAPI } from '../../api/Line';

export const useLine = () => {
  /* Line 차트 데이터 가져오기 */
  const fetchLineChartDataQuery = useQuery({
    queryKey: ['line'],
    queryFn: fetchLineChartDataAPI
  });

  return { fetchLineChartDataQuery };
};
