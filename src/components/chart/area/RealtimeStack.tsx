import { CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useArea } from '../../../hooks/useArea';
import { generateAreaChartData } from '../../../utils/generateChartData';
import { generateAreaChartOptions } from '../../../utils/generateChartOptions';

Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, Filler);

const RealtimeStackArea = () => {
  const {
    fetchAreaChartRealtimeStackDataQuery: { data, isPending, isError },
    createAreaChartRealtimeStackDataMutation
  } = useArea();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createAreaChartRealtimeStackDataMutation.mutate(String(Number(data[0].data.slice(-1)[0].xlabel) + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateAreaChartData(data);
  const chartOptions = generateAreaChartOptions({});

  return (
    <ChartContainer label="REALTIME (STACK)">
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeStackArea;
