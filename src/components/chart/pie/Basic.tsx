import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generatePieChartData } from '../../../utils/generateChartData';
import { generatePieChartOptions } from '../../../utils/generateChartOptions';
import { usePieStore } from '../../../stores/pieStore';

Chart.register(ArcElement, Tooltip, Legend);

const BasicPie = () => {
  const { pie } = usePieStore();

  const data = pie;

  const chartData = generatePieChartData(data);
  const chartOptions = generatePieChartOptions();

  return (
    <ChartContainer label="BASIC">
      <Pie data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicPie;
