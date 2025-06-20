import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart as BarLine } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useBarLine } from '../../../hooks/useBarLine';
import { generateBarLineChartData } from '../../../utils/generateChartData';
import { generateBarLineChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const RealtimeSlideBarLine = () => {
  const {
    fetchBarLineChartRealtimeSlideDataQuery: { data, isPending, isError },
    createBarLineChartRealtimeSlideDataMutation
  } = useBarLine();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createBarLineChartRealtimeSlideDataMutation.mutate(String(Number(data[0].data.slice(-1)[0].xlabel) + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

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
