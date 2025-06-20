import { Chart, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { usePolar } from '../../../hooks/usePolar';
import { generatePolarChartData } from '../../../utils/generateChartData';
import { generatePolarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const BasicPolar = () => {
  const {
    fetchPolarChartDataQuery: { data, isPending, isError }
  } = usePolar();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generatePolarChartData(data);
  const chartOptions = generatePolarChartOptions();

  return (
    <ChartContainer label="BASIC">
      <PolarArea data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicPolar;
