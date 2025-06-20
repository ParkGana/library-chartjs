import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchBarListChartDataAPI,
  fetchBarListChartRealtimeDataAPI,
  updateBarListChartRealtimeDataAPI
} from '../api/BarList';

export const useBarList = () => {
  const queryClient = useQueryClient();

  /* Bar + List 차트 데이터 가져오기 */
  const fetchBarListChartDataQuery = useQuery({
    queryKey: ['barlist'],
    queryFn: fetchBarListChartDataAPI
  });

  /* Bar + List 차트 데이터 가져오기 (Realtime) */
  const fetchBarListChartRealtimeDataQuery = useQuery({
    queryKey: ['barlistRealtime'],
    queryFn: fetchBarListChartRealtimeDataAPI
  });

  /* Bar + List 차트 데이터 수정 (Realtime) */
  const updateBarListChartRealtimeDataMutation = useMutation({
    mutationFn: updateBarListChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['barlistRealtime'] });
    }
  });

  return {
    fetchBarListChartDataQuery,
    fetchBarListChartRealtimeDataQuery,
    updateBarListChartRealtimeDataMutation
  };
};
