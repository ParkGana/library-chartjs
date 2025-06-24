import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateBubbleChartData } from '../../../utils/generateChartData';
import { generateBubbleChartOptions } from '../../../utils/generateChartOptions';
import { useBubbleStore } from '../../../stores/bubbleStore';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const RealtimeBubble = () => {
  const { bubbleRealtimeA, createBubbleRealtimeA, bubbleRealtimeB, createBubbleRealtimeB } = useBubbleStore();

  const data = [
    { name: 'A', data: bubbleRealtimeA },
    { name: 'B', data: bubbleRealtimeB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createBubbleRealtimeA();
      createBubbleRealtimeB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateBubbleChartData(data);
  const chartOptions = generateBubbleChartOptions({});

  return (
    <ChartContainer label="REALTIME">
      <Bubble data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeBubble;
