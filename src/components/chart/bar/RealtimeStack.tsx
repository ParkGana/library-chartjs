import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarChartData } from '../../../utils/generateChartData';
import { generateBarChartOptions } from '../../../utils/generateChartOptions';
import { useBarStore } from '../../../stores/barStore';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RealtimeStackBar = () => {
  const { barRealtimeStackA, createBarRealtimeStackA, barRealtimeStackB, createBarRealtimeStackB } = useBarStore();

  const data = [
    { name: 'A', data: barRealtimeStackA },
    { name: 'B', data: barRealtimeStackB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createBarRealtimeStackA();
      createBarRealtimeStackB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateBarChartData(data);
  const chartOptions = generateBarChartOptions({});

  return (
    <ChartContainer label="REALTIME (STACK)">
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeStackBar;
