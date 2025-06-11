import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createBarChartRealtimeSlideDataAPI,
  createBarChartRealtimeStackDataAPI,
  fetchBarChartDataAPI,
  fetchBarChartRealtimeSlideDataAPI,
  fetchBarChartRealtimeStackDataAPI
} from '../../api/Bar';

export const useBar = () => {
  const queryClient = useQueryClient();

  /* Bar 차트 데이터 가져오기 */
  const fetchBarChartDataQuery = useQuery({
    queryKey: ['bar'],
    queryFn: fetchBarChartDataAPI
  });

  /* Bar 차트 데이터 가져오기 (Realtime - Stack) */
  const fetchBarChartRealtimeStackDataQuery = useQuery({
    queryKey: ['barRealtimeStack'],
    queryFn: fetchBarChartRealtimeStackDataAPI
  });

  /* Bar 차트 데이터 가져오기 (Realtime - Slide) */
  const fetchBarChartRealtimeSlideDataQuery = useQuery({
    queryKey: ['barRealtimeSlide'],
    queryFn: fetchBarChartRealtimeSlideDataAPI
  });

  /* Bar 차트 데이터 생성 (Realtime - Stack) */
  const createBarChartRealtimeStackDataMutation = useMutation({
    mutationFn: createBarChartRealtimeStackDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['barRealtimeStack'] });
    }
  });

  /* Bar 차트 데이터 생성 (Realtime - Slide) */
  const createBarChartRealtimeSlideDataMutation = useMutation({
    mutationFn: createBarChartRealtimeSlideDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['barRealtimeSlide'] });
    }
  });

  return {
    fetchBarChartDataQuery,
    fetchBarChartRealtimeStackDataQuery,
    fetchBarChartRealtimeSlideDataQuery,
    createBarChartRealtimeStackDataMutation,
    createBarChartRealtimeSlideDataMutation
  };
};
