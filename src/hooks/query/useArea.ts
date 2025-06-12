import { useQuery } from '@tanstack/react-query';
import { fetchAreaChartDataAPI } from '../../api/Area';

export const useArea = () => {
  /* Area 차트 데이터 가져오기 */
  const fetchAreaChartDataQuery = useQuery({
    queryKey: ['area'],
    queryFn: fetchAreaChartDataAPI
  });

  return { fetchAreaChartDataQuery };
};
