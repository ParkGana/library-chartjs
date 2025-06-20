import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useBar } from '../../../hooks/useBar';
import { generateBarChartData } from '../../../utils/generateChartData';
import { generateBarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StackBar = () => {
  const {
    fetchBarChartDataQuery: { data, isPending, isError }
  } = useBar();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBarChartData(data);
  const chartOptions = generateBarChartOptions({ stacked: true, maxY: data.length * 100 });

  return (
    <ChartContainer label="STACK">
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default StackBar;
