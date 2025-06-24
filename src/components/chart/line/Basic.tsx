import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateLineChartData } from '../../../utils/generateChartData';
import { generateLineChartOptions } from '../../../utils/generateChartOptions';
import { useLineStore } from '../../../stores/lineStore';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const BasicLine = () => {
  const { lineA, lineB } = useLineStore();

  const data = [
    { name: 'A', data: lineA },
    { name: 'B', data: lineB }
  ];

  const chartData = generateLineChartData(data);
  const chartOptions = generateLineChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicLine;
