import { Chart, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generatePolarChartData } from '../../../utils/generateChartData';
import { generatePolarChartOptions } from '../../../utils/generateChartOptions';
import { usePolarStore } from '../../../stores/polarStore';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const BasicPolar = () => {
  const { polar } = usePolarStore();

  const data = polar;

  const chartData = generatePolarChartData(data);
  const chartOptions = generatePolarChartOptions();

  return (
    <ChartContainer label="BASIC">
      <PolarArea data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicPolar;
