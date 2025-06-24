import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateBubbleChartData } from '../../../utils/generateChartData';
import { generateBubbleChartOptions } from '../../../utils/generateChartOptions';
import { useBubbleStore } from '../../../stores/bubbleStore';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const BasicBubble = () => {
  const { bubbleA, bubbleB } = useBubbleStore();

  const data = [
    { name: 'A', data: bubbleA },
    { name: 'B', data: bubbleB }
  ];

  const chartData = generateBubbleChartData(data);
  const chartOptions = generateBubbleChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Bubble data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicBubble;
