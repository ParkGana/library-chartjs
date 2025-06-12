import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useBubble } from '../../../hooks/query/useBubble';
import { generateBubbleChartData } from '../../../utils/generateChartData';
import { generateBubbleChartOptions } from '../../../utils/generateChartOptions';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const BasicBubble = () => {
  const {
    fetchBubbleChartDataQuery: { data, isPending, isError }
  } = useBubble();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBubbleChartData(data);
  const chartOptions = generateBubbleChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Bubble data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicBubble;
