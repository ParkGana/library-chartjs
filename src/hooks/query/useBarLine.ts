import { useQuery } from '@tanstack/react-query';
import { fetchBarLineChartDataAPI } from '../../api/BarLine';

export const useBarLine = () => {
  /* Bar + Line 차트 데이터 가져오기 */
  const fetchBarLineChartDataQuery = useQuery({
    queryKey: ['barline'],
    queryFn: fetchBarLineChartDataAPI
  });

  return { fetchBarLineChartDataQuery };
};
