import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart as BarLine } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useBarLine } from '../../../hooks/useBarLine';
import { generateBarLineChartData } from '../../../utils/generateChartData';
import { generateBarLineChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const BasicBarLine = () => {
  const {
    fetchBarLineChartDataQuery: { data, isPending, isError }
  } = useBarLine();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBarLineChartData(data);
  const chartOptions = generateBarLineChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <BarLine type="bar" data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicBarLine;
