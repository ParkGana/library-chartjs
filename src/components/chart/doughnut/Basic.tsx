import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateDoughnutChartData } from '../../../utils/generateChartData';
import { generateDoughnutChartOptions } from '../../../utils/generateChartOptions';
import { useDoughnutStore } from '../../../stores/doughnutStore';

Chart.register(ArcElement, Tooltip, Legend);

const BasicDoughnut = () => {
  const { doughnut } = useDoughnutStore();

  const data = doughnut;

  const chartData = generateDoughnutChartData(data);
  const chartOptions = generateDoughnutChartOptions();

  return (
    <ChartContainer label="BASIC">
      <Doughnut data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicDoughnut;
