import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateLineChartData } from '../../../utils/generateChartData';
import { generateLineChartOptions } from '../../../utils/generateChartOptions';
import { useLineStore } from '../../../stores/lineStore';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const RealtimeStackLine = () => {
  const { lineRealtimeStackA, createLineRealtimeStackA, lineRealtimeStackB, createLineRealtimeStackB } = useLineStore();

  const data = [
    { name: 'A', data: lineRealtimeStackA },
    { name: 'B', data: lineRealtimeStackB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createLineRealtimeStackA();
      createLineRealtimeStackB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateLineChartData(data);
  const chartOptions = generateLineChartOptions({});

  return (
    <ChartContainer label="REALTIME (STACK)">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeStackLine;
