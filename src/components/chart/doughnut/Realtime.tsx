import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useDoughnut } from '../../../hooks/useDoughnut';
import { generateDoughnutChartData } from '../../../utils/generateChartData';
import { generateDoughnutChartOptions } from '../../../utils/generateChartOptions';

Chart.register(ArcElement, Tooltip, Legend);

const RealtimeDoughnut = () => {
  const {
    fetchDoughnutChartRealtimeDataQuery: { data, isPending, isError },
    updateDoughnutChartRealtimeDataMutation
  } = useDoughnut();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        updateDoughnutChartRealtimeDataMutation.mutate(data);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateDoughnutChartData(data);
  const chartOptions = generateDoughnutChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Doughnut data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeDoughnut;
