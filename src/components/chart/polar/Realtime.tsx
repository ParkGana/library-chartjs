import { Chart, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generatePolarChartData } from '../../../utils/generateChartData';
import { generatePolarChartOptions } from '../../../utils/generateChartOptions';
import { usePolarStore } from '../../../stores/polarStore';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const RealtimePolar = () => {
  const { polarRealtime, updatePolarRealtime } = usePolarStore();

  const data = polarRealtime;

  useEffect(() => {
    const interval = setInterval(() => {
      updatePolarRealtime();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generatePolarChartData(data);
  const chartOptions = generatePolarChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <PolarArea data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimePolar;
