import { CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateAreaChartData } from '../../../utils/generateChartData';
import { generateAreaChartOptions } from '../../../utils/generateChartOptions';
import { useAreaStore } from '../../../stores/areaStore';

Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, Filler);

const RealtimeStackArea = () => {
  const { areaRealtimeStackA, createAreaRealtimeStackA, areaRealtimeStackB, createAreaRealtimeStackB } = useAreaStore();

  const data = [
    { name: 'A', data: areaRealtimeStackA },
    { name: 'B', data: areaRealtimeStackB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createAreaRealtimeStackA();
      createAreaRealtimeStackB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateAreaChartData(data);
  const chartOptions = generateAreaChartOptions({});

  return (
    <ChartContainer label="REALTIME (STACK)">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeStackArea;
