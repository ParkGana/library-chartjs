import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createBarLineChartRealtimeSlideDataAPI,
  createBarLineChartRealtimeStackDataAPI,
  fetchBarLineChartDataAPI,
  fetchBarLineChartRealtimeSlideDataAPI,
  fetchBarLineChartRealtimeStackDataAPI
} from '../../api/BarLine';

export const useBarLine = () => {
  const queryClient = useQueryClient();

  /* Bar + Line 차트 데이터 가져오기 */
  const fetchBarLineChartDataQuery = useQuery({
    queryKey: ['barline'],
    queryFn: fetchBarLineChartDataAPI
  });

  /* Bar + Line 차트 데이터 가져오기 (Realtime - Stack) */
  const fetchBarLineChartRealtimeStackDataQuery = useQuery({
    queryKey: ['barlineRealtimeStack'],
    queryFn: fetchBarLineChartRealtimeStackDataAPI
  });

  /* Bar + Line 차트 데이터 가져오기 (Realtime - Slide) */
  const fetchBarLineChartRealtimeSlideDataQuery = useQuery({
    queryKey: ['barlineRealtimeSlide'],
    queryFn: fetchBarLineChartRealtimeSlideDataAPI
  });

  /* Bar + Line 차트 데이터 생성 (Realtime - Stack) */
  const createBarLineChartRealtimeStackDataMutation = useMutation({
    mutationFn: createBarLineChartRealtimeStackDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['barlineRealtimeStack'] });
    }
  });

  /* Bar + Line 차트 데이터 생성 (Realtime - Slide) */
  const createBarLineChartRealtimeSlideDataMutation = useMutation({
    mutationFn: createBarLineChartRealtimeSlideDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['barlineRealtimeSlide'] });
    }
  });

  return {
    fetchBarLineChartDataQuery,
    fetchBarLineChartRealtimeStackDataQuery,
    fetchBarLineChartRealtimeSlideDataQuery,
    createBarLineChartRealtimeStackDataMutation,
    createBarLineChartRealtimeSlideDataMutation
  };
};
