import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart as BarLine } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarLineChartData } from '../../../utils/generateChartData';
import { generateBarLineChartOptions } from '../../../utils/generateChartOptions';
import { useBarLineStore } from '../../../stores/barlineStore';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const BasicBarLine = () => {
  const { lineA, barA, barB } = useBarLineStore();

  const data = [
    { name: 'A', data: lineA, type: 'line' as const },
    { name: 'B', data: barA, type: 'bar' as const },
    { name: 'C', data: barB, type: 'bar' as const }
  ];

  const chartData = generateBarLineChartData(data);
  const chartOptions = generateBarLineChartOptions({});

  return (
    <ChartContainer label="BASIC">
      <BarLine type="bar" data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BasicBarLine;
