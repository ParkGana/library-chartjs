import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Chart as BarLine } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateBarLineChartData } from '../../../utils/generateChartData';
import { generateBarLineChartOptions } from '../../../utils/generateChartOptions';
import VerticalRangebar from '../../rangebar/VerticalRangebar';
import HorizontalRangebar from '../../rangebar/HorizontalRangebar';
import { useBarLineStore } from '../../../stores/barlineStore';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const RangeBarLine = () => {
  const { lineA, barA, barB } = useBarLineStore();

  const data = [
    { name: 'A', data: lineA, type: 'line' as const },
    { name: 'B', data: barA, type: 'bar' as const },
    { name: 'C', data: barB, type: 'bar' as const }
  ];

  const [rangeX, setRangeX] = useState({ min: 0, max: 100 });
  const [rangeY, setRangeY] = useState({ min: 0, max: 100 });

  useEffect(() => {
    setRangeX({ ...rangeX, max: data[0].data.length });
  }, []);

  const chartData = generateBarLineChartData(data);
  const chartOptions = generateBarLineChartOptions({
    minX: data[0].data.map(({ xlabel }) => xlabel).slice(-(data[0].data.length - rangeX.min))[0],
    maxX: data[0].data.map(({ xlabel }) => xlabel).slice(-(data[0].data.length - rangeX.max + 1))[0],
    minY: rangeY.min,
    maxY: rangeY.max
  });

  return (
    <ChartContainer label="RANGE">
      <div className="w-full h-full flex">
        <div className="w-6 px-1 py-2" style={{ height: 'calc(100% - 24px)' }}>
          <VerticalRangebar
            range={{ min: 0, max: 100 }}
            value={{ min: rangeY.min, max: rangeY.max }}
            step={20}
            handleChange={setRangeY}
          />
        </div>
        <div className="h-full" style={{ width: 'calc(100% - 24px)' }}>
          <div className="w-full" style={{ height: 'calc(100% - 24px)' }}>
            <BarLine type="bar" data={chartData} options={chartOptions} />
            <div className="h-6 pt-3 px-2 py-1">
              <HorizontalRangebar
                range={{ min: 0, max: data[0].data.length }}
                value={{ min: rangeX.min, max: rangeX.max }}
                step={1}
                handleChange={setRangeX}
              />
            </div>
          </div>
        </div>
      </div>
    </ChartContainer>
  );
};

export default RangeBarLine;
