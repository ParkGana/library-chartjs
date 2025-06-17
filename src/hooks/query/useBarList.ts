import { useQuery } from '@tanstack/react-query';
import { fetchBarListChartDataAPI } from '../../api/BarList';

export const useBarList = () => {
  /* Bar + List 차트 데이터 가져오기 */
  const fetchBarListChartDataQuery = useQuery({
    queryKey: ['barlist'],
    queryFn: fetchBarListChartDataAPI
  });

  return {
    fetchBarListChartDataQuery
  };
};
