import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useLine } from '../../../hooks/query/useLine';
import { generateLineChartData } from '../../../utils/generateChartData';
import { generateLineChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const BasicLine = () => {
  const {
    fetchLineChartDataQuery: { data, isPending, isError }
  } = useLine();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateLineChartData(data);
  const chartOptions = generateLineChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicLine;
