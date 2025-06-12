import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchDoughnutChartDataAPI,
  fetchDoughnutChartRealtimeDataAPI,
  updateDoughnutChartRealtimeDataAPI
} from '../../api/Doughnut';

export const useDoughnut = () => {
  const queryClient = useQueryClient();

  /* Doughnut 차트 데이터 가져오기 */
  const fetchDoughnutChartDataQuery = useQuery({
    queryKey: ['doughnut'],
    queryFn: fetchDoughnutChartDataAPI
  });

  /* Doughnut 차트 데이터 가져오기 (Realtime) */
  const fetchDoughnutChartRealtimeDataQuery = useQuery({
    queryKey: ['doughnutRealtime'],
    queryFn: fetchDoughnutChartRealtimeDataAPI
  });

  /* Doughnut 차트 데이터 수정 (Realtime) */
  const updateDoughnutChartRealtimeDataMutation = useMutation({
    mutationFn: updateDoughnutChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doughnutRealtime'] });
    }
  });

  return {
    fetchDoughnutChartDataQuery,
    fetchDoughnutChartRealtimeDataQuery,
    updateDoughnutChartRealtimeDataMutation
  };
};
