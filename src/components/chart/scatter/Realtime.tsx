import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useScatter } from '../../../hooks/query/useScatter';
import { generateScatterChartData } from '../../../utils/generateChartData';
import { generateScatterChartOptions } from '../../../utils/generateChartOptions';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const RealtimeScatter = () => {
  const {
    fetchScatterChartRealtimeDataQuery: { data, isPending, isError },
    createScatterChartRealtimeDataMutation
  } = useScatter();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        createScatterChartRealtimeDataMutation.mutate();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateScatterChartData(data);
  const chartOptions = generateScatterChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Scatter data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeScatter;
