import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useRadar } from '../../../hooks/useRadar';
import { generateRadarChartData } from '../../../utils/generateChartData';
import { generateRadarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const BasicRadar = () => {
  const {
    fetchRadarChartDataQuery: { data, isPending, isError }
  } = useRadar();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateRadarChartData(data);
  const chartOptions = generateRadarChartOptions();

  return (
    <ChartContainer label="BASIC">
      <Radar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicRadar;
