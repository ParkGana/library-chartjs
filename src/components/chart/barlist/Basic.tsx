import { BarElement, Chart, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarListChartData } from '../../../utils/generateChartData';
import { generateBarListChartOptions } from '../../../utils/generateChartOptions';
import clsx from 'clsx';
import { useBarListStore } from '../../../stores/barlistStore';

Chart.register(BarElement, Tooltip, Legend);

const BasicBarList = () => {
  const { bar } = useBarListStore();

  const data = bar;

  const totalValue = data.map(({ value }) => value).reduce((acc, cur) => acc + cur, 0);
  const chartData = generateBarListChartData(data);
  const chartOptions = generateBarListChartOptions();

  return (
    <ChartContainer label="BASIC">
      <div className="h-full grid grid-cols-3">
        <div className={`grid grid-rows-${data.length} col-span-1`}>
          {data.map(({ name, value }, index) => (
            <div
              key={name}
              className={clsx(
                'row-span-1 flex items-center justify-between px-3',
                index > 0 && 'border-t border-gray-200'
              )}
            >
              <p className="text-caption">{name}</p>
              <p className="text-caption">{`${((value / totalValue) * 100).toFixed(1)}%`}</p>
            </div>
          ))}
        </div>
        <div className="relative h-full col-span-2">
          <div className="absolute inset-0">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </ChartContainer>
  );
};

export default BasicBarList;
