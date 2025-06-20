import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { useDoughnut } from '../../../hooks/useDoughnut';
import { generateDoughnutChartData } from '../../../utils/generateChartData';
import { generateDoughnutChartOptions } from '../../../utils/generateChartOptions';

Chart.register(ArcElement, Tooltip, Legend);

const BasicDoughnut = () => {
  const {
    fetchDoughnutChartDataQuery: { data, isPending, isError }
  } = useDoughnut();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateDoughnutChartData(data);
  const chartOptions = generateDoughnutChartOptions();

  return (
    <ChartContainer label="BASIC">
      <Doughnut data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicDoughnut;
