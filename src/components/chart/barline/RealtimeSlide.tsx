import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart as BarLine } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarLineChartData } from '../../../utils/generateChartData';
import { generateBarLineChartOptions } from '../../../utils/generateChartOptions';
import { useBarLineStore } from '../../../stores/barlineStore';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const RealtimeSlideBarLine = () => {
  const {
    lineRealtimeSlideA,
    createLineRealtimeSlideA,
    barRealtimeSlideA,
    createBarRealtimeSlideA,
    barRealtimeSlideB,
    createBarRealtimeSlideB
  } = useBarLineStore();

  const data = [
    { name: 'A', data: lineRealtimeSlideA, type: 'line' as const },
    { name: 'B', data: barRealtimeSlideA, type: 'bar' as const },
    { name: 'C', data: barRealtimeSlideB, type: 'bar' as const }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createLineRealtimeSlideA();
      createBarRealtimeSlideA();
      createBarRealtimeSlideB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateBarLineChartData(data);
  const chartOptions = generateBarLineChartOptions({
    minX: data[0].data.map(({ xlabel }) => xlabel).slice(-5)[0],
    maxX: data[0].data.map(({ xlabel }) => xlabel).slice(-1)[0]
  });

  return (
    <ChartContainer label="REALTIME (SLIDE)">
      <BarLine type="bar" data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeSlideBarLine;
