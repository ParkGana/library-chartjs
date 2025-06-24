import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart as BarLine } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarLineChartData } from '../../../utils/generateChartData';
import { generateBarLineChartOptions } from '../../../utils/generateChartOptions';
import { useBarLineStore } from '../../../stores/barlineStore';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const RealtimeStackBarLine = () => {
  const {
    lineRealtimeStackA,
    createLineRealtimeStackA,
    barRealtimeStackA,
    createBarRealtimeStackA,
    barRealtimeStackB,
    createBarRealtimeStackB
  } = useBarLineStore();

  const data = [
    { name: 'A', data: lineRealtimeStackA, type: 'line' as const },
    { name: 'B', data: barRealtimeStackA, type: 'bar' as const },
    { name: 'C', data: barRealtimeStackB, type: 'bar' as const }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createLineRealtimeStackA();
      createBarRealtimeStackA();
      createBarRealtimeStackB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateBarLineChartData(data);
  const chartOptions = generateBarLineChartOptions({});

  return (
    <ChartContainer label="REALTIME (STACK)">
      <BarLine type="bar" data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeStackBarLine;
