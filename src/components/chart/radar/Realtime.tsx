import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useRadar } from '../../../hooks/query/useRadar';
import { generateRadarChartData } from '../../../utils/generateChartData';
import { generateRadarChartOptions } from '../../../utils/generateChartOptions';

Chart.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const RealtimeRadar = () => {
  const {
    fetchRadarChartRealtimeDataQuery: { data, isPending, isError },
    updateRadarChartRealtimeDataMutation
  } = useRadar();

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        updateRadarChartRealtimeDataMutation.mutate(data);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateRadarChartData(data);
  const chartOptions = generateRadarChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Radar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeRadar;
