import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPieChartDataAPI, fetchPieChartRealtimeDataAPI, updatePieChartRealtimeDataAPI } from '../../api/Pie';

export const usePie = () => {
  const queryClient = useQueryClient();

  /* Pie 차트 데이터 가져오기 */
  const fetchPieChartDataQuery = useQuery({
    queryKey: ['pie'],
    queryFn: fetchPieChartDataAPI
  });

  /* Pie 차트 데이터 가져오기 (Realtime) */
  const fetchPieChartRealtimeDataQuery = useQuery({
    queryKey: ['pieRealtime'],
    queryFn: fetchPieChartRealtimeDataAPI
  });

  /* Pie 차트 데이터 수정 (Realtime) */
  const updatePieChartRealtimeDataMutation = useMutation({
    mutationFn: updatePieChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pieRealtime'] });
    }
  });

  return {
    fetchPieChartDataQuery,
    fetchPieChartRealtimeDataQuery,
    updatePieChartRealtimeDataMutation
  };
};
