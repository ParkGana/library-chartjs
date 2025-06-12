import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useBubble } from '../../../hooks/query/useBubble';
import { generateBubbleChartData } from '../../../utils/generateChartData';
import { generateBubbleChartOptions } from '../../../utils/generateChartOptions';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const RealtimeBubble = () => {
  const {
    fetchBubbleChartRealtimeDataQuery: { data, isPending, isError },
    createBubbleChartRealtimeDataMutation
  } = useBubble();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createBubbleChartRealtimeDataMutation.mutate();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBubbleChartData(data);
  const chartOptions = generateBubbleChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Bubble data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeBubble;
