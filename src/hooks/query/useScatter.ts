import { useQuery } from '@tanstack/react-query';
import { fetchScatterChartDataAPI } from '../../api/Scatter';

export const useScatter = () => {
  /* Scatter 차트 데이터 가져오기 */
  const fetchScatterChartDataQuery = useQuery({
    queryKey: ['scatter'],
    queryFn: fetchScatterChartDataAPI
  });

  return { fetchScatterChartDataQuery };
};
