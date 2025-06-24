import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateRadarChartData } from '../../../utils/generateChartData';
import { generateRadarChartOptions } from '../../../utils/generateChartOptions';
import { useRadarStore } from '../../../stores/radarStore';

Chart.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const RealtimeRadar = () => {
  const { radarRealtimeA, updateRadarRealtimeA, radarRealtimeB, updateRadarRealtimeB } = useRadarStore();

  const data = [
    { name: 'A', data: radarRealtimeA },
    { name: 'B', data: radarRealtimeB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      updateRadarRealtimeA();
      updateRadarRealtimeB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateRadarChartData(data);
  const chartOptions = generateRadarChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Radar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeRadar;
