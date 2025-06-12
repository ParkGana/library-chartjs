import { useQuery } from '@tanstack/react-query';
import { fetchBubbleChartDataAPI } from '../../api/Bubble';

export const useBubble = () => {
  /* Bubble 차트 데이터 가져오기 */
  const fetchBubbleChartDataQuery = useQuery({
    queryKey: ['bubble'],
    queryFn: fetchBubbleChartDataAPI
  });

  return { fetchBubbleChartDataQuery };
};
