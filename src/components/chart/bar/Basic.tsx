import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarChartData } from '../../../utils/generateChartData';
import { generateBarChartOptions } from '../../../utils/generateChartOptions';
import { useBarStore } from '../../../stores/barStore';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BasicBar = () => {
  const { barA, barB } = useBarStore();

  const data = [
    { name: 'A', data: barA },
    { name: 'B', data: barB }
  ];

  const chartData = generateBarChartData(data);
  const chartOptions = generateBarChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicBar;
