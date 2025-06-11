import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createLineChartRealtimeSlideDataAPI,
  createLineChartRealtimeStackDataAPI,
  fetchLineChartDataAPI,
  fetchLineChartRealtimeSlideDataAPI,
  fetchLineChartRealtimeStackDataAPI
} from '../../api/Line';

export const useLine = () => {
  const queryClient = useQueryClient();

  /* Line 차트 데이터 가져오기 */
  const fetchLineChartDataQuery = useQuery({
    queryKey: ['line'],
    queryFn: fetchLineChartDataAPI
  });

  /* Line 차트 데이터 가져오기 (Realtime - Stack) */
  const fetchLineChartRealtimeStackDataQuery = useQuery({
    queryKey: ['lineRealtimeStack'],
    queryFn: fetchLineChartRealtimeStackDataAPI
  });

  /* Line 차트 데이터 가져오기 (Realtime - Slide) */
  const fetchLineChartRealtimeSlideDataQuery = useQuery({
    queryKey: ['lineRealtimeSlide'],
    queryFn: fetchLineChartRealtimeSlideDataAPI
  });

  /* Line 차트 데이터 생성 (Realtime - Stack) */
  const createLineChartRealtimeStackDataMutation = useMutation({
    mutationFn: createLineChartRealtimeStackDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lineRealtimeStack'] });
    }
  });

  /* Line 차트 데이터 생성 (Realtime - Slide) */
  const createLineChartRealtimeSlideDataMutation = useMutation({
    mutationFn: createLineChartRealtimeSlideDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lineRealtimeSlide'] });
    }
  });

  return {
    fetchLineChartDataQuery,
    fetchLineChartRealtimeStackDataQuery,
    fetchLineChartRealtimeSlideDataQuery,
    createLineChartRealtimeStackDataMutation,
    createLineChartRealtimeSlideDataMutation
  };
};
