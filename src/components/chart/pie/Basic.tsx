import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { usePie } from '../../../hooks/usePie';
import { generatePieChartData } from '../../../utils/generateChartData';
import { generatePieChartOptions } from '../../../utils/generateChartOptions';

Chart.register(ArcElement, Tooltip, Legend);

const BasicPie = () => {
  const {
    fetchPieChartDataQuery: { data, isPending, isError }
  } = usePie();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generatePieChartData(data);
  const chartOptions = generatePieChartOptions();

  return (
    <ChartContainer label="BASIC">
      <Pie data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicPie;
