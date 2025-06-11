import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useBar } from '../../../hooks/query/useBar';
import { generateBarChartData } from '../../../utils/generateChartData';
import { generateBarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RealtimeSlideBar = () => {
  const {
    fetchBarChartRealtimeSlideDataQuery: { data, isPending, isError },
    createBarChartRealtimeSlideDataMutation
  } = useBar();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createBarChartRealtimeSlideDataMutation.mutate(String(Number(data[0].data.slice(-1)[0].xlabel) + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBarChartData(data);
  const chartOptions = generateBarChartOptions({
    minX: data[0].data.map(({ xlabel }) => xlabel).slice(-5)[0],
    maxX: data[0].data.map(({ xlabel }) => xlabel).slice(-1)[0]
  });

  return (
    <ChartContainer>
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeSlideBar;
