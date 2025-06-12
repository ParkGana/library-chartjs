import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createBubbleChartRealtimeDataAPI,
  fetchBubbleChartDataAPI,
  fetchBubbleChartRealtimeDataAPI
} from '../../api/Bubble';

export const useBubble = () => {
  const queryClient = useQueryClient();

  /* Bubble 차트 데이터 가져오기 */
  const fetchBubbleChartDataQuery = useQuery({
    queryKey: ['bubble'],
    queryFn: fetchBubbleChartDataAPI
  });

  /* Bubble 차트 데이터 가져오기 (Realtime) */
  const fetchBubbleChartRealtimeDataQuery = useQuery({
    queryKey: ['bubbleRealtime'],
    queryFn: fetchBubbleChartRealtimeDataAPI
  });

  /* Bubble 차트 데이터 생성 (Realtime) */
  const createBubbleChartRealtimeDataMutation = useMutation({
    mutationFn: createBubbleChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bubbleRealtime'] });
    }
  });

  return {
    fetchBubbleChartDataQuery,
    fetchBubbleChartRealtimeDataQuery,
    createBubbleChartRealtimeDataMutation
  };
};
