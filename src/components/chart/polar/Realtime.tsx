import { Chart, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { usePolar } from '../../../hooks/usePolar';
import { generatePolarChartData } from '../../../utils/generateChartData';
import { generatePolarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const RealtimePolar = () => {
  const {
    fetchPolarChartRealtimeDataQuery: { data, isPending, isError },
    updatePolarChartRealtimeDataMutation
  } = usePolar();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        updatePolarChartRealtimeDataMutation.mutate(data);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generatePolarChartData(data);
  const chartOptions = generatePolarChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <PolarArea data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimePolar;
