import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generatePieChartData } from '../../../utils/generateChartData';
import { generatePieChartOptions } from '../../../utils/generateChartOptions';
import { usePieStore } from '../../../stores/pieStore';

Chart.register(ArcElement, Tooltip, Legend);

const RealtimePie = () => {
  const { pieRealtime, updatePieRealtime } = usePieStore();

  const data = pieRealtime;

  useEffect(() => {
    const interval = setInterval(() => {
      updatePieRealtime();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generatePieChartData(data);
  const chartOptions = generatePieChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Pie data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimePie;
