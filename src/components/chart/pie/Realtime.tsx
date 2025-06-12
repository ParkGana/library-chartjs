import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { usePie } from '../../../hooks/query/usePie';
import { generatePieChartData } from '../../../utils/generateChartData';
import { generatePieChartOptions } from '../../../utils/generateChartOptions';

Chart.register(ArcElement, Tooltip, Legend);

const RealtimePie = () => {
  const {
    fetchPieChartRealtimeDataQuery: { data, isPending, isError },
    updatePieChartRealtimeDataMutation
  } = usePie();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        updatePieChartRealtimeDataMutation.mutate(data);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generatePieChartData(data);
  const chartOptions = generatePieChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Pie data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimePie;
