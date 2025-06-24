import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateRadarChartData } from '../../../utils/generateChartData';
import { generateRadarChartOptions } from '../../../utils/generateChartOptions';
import { useRadarStore } from '../../../stores/radarStore';

Chart.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const BasicRadar = () => {
  const { radarA, radarB } = useRadarStore();

  const data = [
    { name: 'A', data: radarA },
    { name: 'B', data: radarB }
  ];

  const chartData = generateRadarChartData(data);
  const chartOptions = generateRadarChartOptions();

  return (
    <ChartContainer label="BASIC">
      <Radar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicRadar;
