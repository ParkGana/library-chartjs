import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchRadarChartDataAPI,
  fetchRadarChartRealtimeDataAPI,
  updateRadarChartRealtimeDataAPI
} from '../api/Radar';

export const useRadar = () => {
  const queryClient = useQueryClient();

  /* Radar 차트 데이터 가져오기 */
  const fetchRadarChartDataQuery = useQuery({
    queryKey: ['radar'],
    queryFn: fetchRadarChartDataAPI
  });

  /* Radar 차트 데이터 가져오기 (Realtime) */
  const fetchRadarChartRealtimeDataQuery = useQuery({
    queryKey: ['radarRealtime'],
    queryFn: fetchRadarChartRealtimeDataAPI
  });

  /* Radar 차트 데이터 수정 (Realtime) */
  const updateRadarChartRealtimeDataMutation = useMutation({
    mutationFn: updateRadarChartRealtimeDataAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['radarRealtime'] });
    }
  });

  return {
    fetchRadarChartDataQuery,
    fetchRadarChartRealtimeDataQuery,
    updateRadarChartRealtimeDataMutation
  };
};
