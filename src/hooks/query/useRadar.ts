import { useQuery } from '@tanstack/react-query';
import { fetchRadarChartDataAPI } from '../../api/Radar';

export const useRadar = () => {
  /* Radar 차트 데이터 가져오기 */
  const fetchRadarChartDataQuery = useQuery({
    queryKey: ['radar'],
    queryFn: fetchRadarChartDataAPI
  });

  return {
    fetchRadarChartDataQuery
  };
};
