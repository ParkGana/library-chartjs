import { useQuery } from '@tanstack/react-query';
import { fetchDoughnutChartDataAPI } from '../../api/Doughnut';

export const useDoughnut = () => {
  /* Doughnut 차트 데이터 가져오기 */
  const fetchDoughnutChartDataQuery = useQuery({
    queryKey: ['doughnut'],
    queryFn: fetchDoughnutChartDataAPI
  });

  return {
    fetchDoughnutChartDataQuery
  };
};
