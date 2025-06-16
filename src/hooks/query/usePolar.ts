import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchPolarChartDataAPI,
  fetchPolarChartRealtimeDataAPI,
  updatePolarChartRealtimeDataAPI
} from '../../api/Polar';

export const usePolar = () => {
  const queryClient = useQueryClient();

  /* Polar 차트 데이터 가져오기 */
  const fetchPolarChartDataQuery = useQuery({
    queryKey: ['polar'],
    queryFn: fetchPolarChartDataAPI
  });

  /* Polar 차트 데이터 가져오기 (Realtime) */
  const fetchPolarChartRealtimeDataQuery = useQuery({
    queryKey: ['polarRealtime'],
    queryFn: fetchPolarChartRealtimeDataAPI
  });

  /* Polar 차트 데이터 수정 (Realtime) */
  const updatePolarChartRealtimeDataMutation = useMutation({
    mutationFn: updatePolarChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['polarRealtime'] });
    }
  });

  return {
    fetchPolarChartDataQuery,
    fetchPolarChartRealtimeDataQuery,
    updatePolarChartRealtimeDataMutation
  };
};
