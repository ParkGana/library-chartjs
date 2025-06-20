import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useScatter } from '../../../hooks/useScatter';
import { generateScatterChartData } from '../../../utils/generateChartData';
import { generateScatterChartOptions } from '../../../utils/generateChartOptions';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const BasicScatter = () => {
  const {
    fetchScatterChartDataQuery: { data, isPending, isError }
  } = useScatter();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateScatterChartData(data);
  const chartOptions = generateScatterChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Scatter data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicScatter;
