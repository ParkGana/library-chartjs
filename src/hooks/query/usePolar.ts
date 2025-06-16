import { useQuery } from '@tanstack/react-query';
import { fetchPolarChartDataAPI } from '../../api/Polar';

export const usePolar = () => {
  /* Polar 차트 데이터 가져오기 */
  const fetchPolarChartDataQuery = useQuery({
    queryKey: ['polar'],
    queryFn: fetchPolarChartDataAPI
  });

  return {
    fetchPolarChartDataQuery
  };
};
