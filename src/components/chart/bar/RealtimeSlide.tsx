import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarChartData } from '../../../utils/generateChartData';
import { generateBarChartOptions } from '../../../utils/generateChartOptions';
import { useBarStore } from '../../../stores/barStore';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RealtimeSlideBar = () => {
  const { barRealtimeSlideA, createBarRealtimeSlideA, barRealtimeSlideB, createBarRealtimeSlideB } = useBarStore();

  const data = [
    { name: 'A', data: barRealtimeSlideA },
    { name: 'B', data: barRealtimeSlideB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createBarRealtimeSlideA();
      createBarRealtimeSlideB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateBarChartData(data);
  const chartOptions = generateBarChartOptions({
    minX: data[0].data.map(({ xlabel }) => xlabel).slice(-5)[0],
    maxX: data[0].data.map(({ xlabel }) => xlabel).slice(-1)[0]
  });

  return (
    <ChartContainer label="REALTIME (SLIDE)">
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeSlideBar;
