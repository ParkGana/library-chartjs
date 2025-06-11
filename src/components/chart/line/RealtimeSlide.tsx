import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useLine } from '../../../hooks/query/useLine';
import { generateLineChartData } from '../../../utils/generateChartData';
import { generateLineChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const RealtimeSlideLine = () => {
  const {
    fetchLineChartRealtimeSlideDataQuery: { data, isPending, isError },
    createLineChartRealtimeSlideDataMutation
  } = useLine();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createLineChartRealtimeSlideDataMutation.mutate(String(Number(data[0].data.slice(-1)[0].xlabel) + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

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
