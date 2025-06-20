import { BarElement, Chart, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useBarList } from '../../../hooks/useBarList';
import { generateBarListChartData } from '../../../utils/generateChartData';
import { generateBarListChartOptions } from '../../../utils/generateChartOptions';
import clsx from 'clsx';

Chart.register(BarElement, Tooltip, Legend);

const RealtimeBarList = () => {
  const {
    fetchBarListChartRealtimeDataQuery: { data, isPending, isError },
    updateBarListChartRealtimeDataMutation
  } = useBarList();

  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setTotalValue(data.map(({ value }) => value).reduce((acc, cur) => acc + cur, 0));

      const interval = setInterval(() => {
        updateBarListChartRealtimeDataMutation.mutate(data);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBarListChartData(data);
  const chartOptions = generateBarListChartOptions();

  return (
    <ChartContainer label="REALTIME">
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

export default RealtimeBarList;
