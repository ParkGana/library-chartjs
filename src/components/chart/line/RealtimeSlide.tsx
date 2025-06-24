import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateLineChartData } from '../../../utils/generateChartData';
import { generateLineChartOptions } from '../../../utils/generateChartOptions';
import { useLineStore } from '../../../stores/lineStore';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const RealtimeSlideLine = () => {
  const { lineRealtimeSlideA, createLineRealtimeSlideA, lineRealtimeSlideB, createLineRealtimeSlideB } = useLineStore();

  const data = [
    { name: 'A', data: lineRealtimeSlideA },
    { name: 'B', data: lineRealtimeSlideB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createLineRealtimeSlideA();
      createLineRealtimeSlideB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateLineChartData(data);
  const chartOptions = generateLineChartOptions({
    minX: data[0].data.map(({ xlabel }) => xlabel).slice(-5)[0],
    maxX: data[0].data.map(({ xlabel }) => xlabel).slice(-1)[0]
  });

  return (
    <ChartContainer label="REALTIME (SLIDE)">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeSlideLine;
