import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useBar } from '../../../hooks/useBar';
import { generateBarChartData } from '../../../utils/generateChartData';
import { generateBarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RealtimeStackBar = () => {
  const {
    fetchBarChartRealtimeStackDataQuery: { data, isPending, isError },
    createBarChartRealtimeStackDataMutation
  } = useBar();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createBarChartRealtimeStackDataMutation.mutate(String(Number(data[0].data.slice(-1)[0].xlabel) + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBarChartData(data);
  const chartOptions = generateBarChartOptions({});

  return (
    <ChartContainer label="REALTIME (STACK)">
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeStackBar;
