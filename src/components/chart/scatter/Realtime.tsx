import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateScatterChartData } from '../../../utils/generateChartData';
import { generateScatterChartOptions } from '../../../utils/generateChartOptions';
import { useScatterStore } from '../../../stores/scatterStore';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const RealtimeScatter = () => {
  const { scatterRealtimeA, createScatterRealtimeA, scatterRealtimeB, createScatterRealtimeB } = useScatterStore();

  const data = [
    { name: 'A', data: scatterRealtimeA },
    { name: 'B', data: scatterRealtimeB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createScatterRealtimeA();
      createScatterRealtimeB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateScatterChartData(data);
  const chartOptions = generateScatterChartOptions({});

  return (
    <ChartContainer label="REALTIME">
      <Scatter data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeScatter;
