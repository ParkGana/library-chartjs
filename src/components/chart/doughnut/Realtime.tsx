import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateDoughnutChartData } from '../../../utils/generateChartData';
import { generateDoughnutChartOptions } from '../../../utils/generateChartOptions';
import { useDoughnutStore } from '../../../stores/doughnutStore';

Chart.register(ArcElement, Tooltip, Legend);

const RealtimeDoughnut = () => {
  const { doughnutRealtime, updateDoughnutRealtime } = useDoughnutStore();

  const data = doughnutRealtime;

  useEffect(() => {
    const interval = setInterval(() => {
      updateDoughnutRealtime();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = generateDoughnutChartData(data);
  const chartOptions = generateDoughnutChartOptions();

  return (
    <ChartContainer label="REALTIME">
      <Doughnut data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default RealtimeDoughnut;
