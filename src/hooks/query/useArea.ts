import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createAreaChartRealtimeSlideDataAPI,
  createAreaChartRealtimeStackDataAPI,
  fetchAreaChartDataAPI,
  fetchAreaChartRealtimeSlideDataAPI,
  fetchAreaChartRealtimeStackDataAPI
} from '../../api/Area';

export const useArea = () => {
  const queryClient = useQueryClient();

  /* Area 차트 데이터 가져오기 */
  const fetchAreaChartDataQuery = useQuery({
    queryKey: ['area'],
    queryFn: fetchAreaChartDataAPI
  });

  /* Area 차트 데이터 가져오기 (Realtime - Stack) */
  const fetchAreaChartRealtimeStackDataQuery = useQuery({
    queryKey: ['areaRealtimeStack'],
    queryFn: fetchAreaChartRealtimeStackDataAPI
  });

  /* Area 차트 데이터 가져오기 (Realtime - Slide) */
  const fetchAreaChartRealtimeSlideDataQuery = useQuery({
    queryKey: ['areaRealtimeSlide'],
    queryFn: fetchAreaChartRealtimeSlideDataAPI
  });

  /* Area 차트 데이터 생성 (Realtime - Stack) */
  const createAreaChartRealtimeStackDataMutation = useMutation({
    mutationFn: createAreaChartRealtimeStackDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areaRealtimeStack'] });
    }
  });

  /* Area 차트 데이터 생성 (Realtime - Slide) */
  const createAreaChartRealtimeSlideDataMutation = useMutation({
    mutationFn: createAreaChartRealtimeSlideDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areaRealtimeSlide'] });
    }
  });

  return {
    fetchAreaChartDataQuery,
    fetchAreaChartRealtimeStackDataQuery,
    fetchAreaChartRealtimeSlideDataQuery,
    createAreaChartRealtimeStackDataMutation,
    createAreaChartRealtimeSlideDataMutation
  };
};
