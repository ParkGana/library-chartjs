import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createScatterChartRealtimeDataAPI,
  fetchScatterChartDataAPI,
  fetchScatterChartRealtimeDataAPI
} from '../api/Scatter';

export const useScatter = () => {
  const queryClient = useQueryClient();

  /* Scatter 차트 데이터 가져오기 */
  const fetchScatterChartDataQuery = useQuery({
    queryKey: ['scatter'],
    queryFn: fetchScatterChartDataAPI
  });

  /* Scatter 차트 데이터 가져오기 (Realtime) */
  const fetchScatterChartRealtimeDataQuery = useQuery({
    queryKey: ['scatterRealtime'],
    queryFn: fetchScatterChartRealtimeDataAPI
  });

  /* Scatter 차트 데이터 생성 (Realtime) */
  const createScatterChartRealtimeDataMutation = useMutation({
    mutationFn: createScatterChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scatterRealtime'] });
    }
  });

  return {
    fetchScatterChartDataQuery,
    fetchScatterChartRealtimeDataQuery,
    createScatterChartRealtimeDataMutation
  };
};
