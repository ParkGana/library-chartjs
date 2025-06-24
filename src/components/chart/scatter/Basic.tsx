import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateScatterChartData } from '../../../utils/generateChartData';
import { generateScatterChartOptions } from '../../../utils/generateChartOptions';
import { useScatterStore } from '../../../stores/scatterStore';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const BasicScatter = () => {
  const { scatterA, scatterB } = useScatterStore();

  const data = [
    { name: 'A', data: scatterA },
    { name: 'B', data: scatterB }
  ];

  const chartData = generateScatterChartData(data);
  const chartOptions = generateScatterChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <Scatter data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicScatter;
