import { CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateAreaChartData } from '../../../utils/generateChartData';
import { generateAreaChartOptions } from '../../../utils/generateChartOptions';
import { useAreaStore } from '../../../stores/areaStore';

Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, Filler);

const RealtimeSlideArea = () => {
  const { areaRealtimeSlideA, createAreaRealtimeSlideA, areaRealtimeSlideB, createAreaRealtimeSlideB } = useAreaStore();

  const data = [
    { name: 'A', data: areaRealtimeSlideA },
    { name: 'B', data: areaRealtimeSlideB }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      createAreaRealtimeSlideA();
      createAreaRealtimeSlideB();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateAreaChartData(data);
  const chartOptions = generateAreaChartOptions({
    minX: data[0].data.map(({ xlabel }) => xlabel).slice(-5)[0],
    maxX: data[0].data.map(({ xlabel }) => xlabel).slice(-1)[0]
  });

  return (
    <ChartContainer label="REALTIME (SLIDE)">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeSlideArea;
