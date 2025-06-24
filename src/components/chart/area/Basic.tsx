import { CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateAreaChartData } from '../../../utils/generateChartData';
import { generateAreaChartOptions } from '../../../utils/generateChartOptions';
import { useAreaStore } from '../../../stores/areaStore';

Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, Filler);

const BasicArea = () => {
  const { areaA, areaB } = useAreaStore();

  const data = [
    { name: 'A', data: areaA },
    { name: 'B', data: areaB }
  ];

  const chartData = generateAreaChartData(data);
  const chartOptions = generateAreaChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicArea;
