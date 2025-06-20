import { CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useArea } from '../../../hooks/useArea';
import { generateAreaChartData } from '../../../utils/generateChartData';
import { generateAreaChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, Filler);

const BasicArea = () => {
  const {
    fetchAreaChartDataQuery: { data, isPending, isError }
  } = useArea();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateAreaChartData(data);
  const chartOptions = generateAreaChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicArea;
