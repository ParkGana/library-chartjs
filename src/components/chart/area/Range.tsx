import { CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { generateAreaChartData } from '../../../utils/generateChartData';
import { generateAreaChartOptions } from '../../../utils/generateChartOptions';
import VerticalRangebar from '../../rangebar/VerticalRangebar';
import HorizontalRangebar from '../../rangebar/HorizontalRangebar';
import { useAreaStore } from '../../../stores/areaStore';

Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, Filler);

const RangeArea = () => {
  const { areaA, areaB } = useAreaStore();

  const data = [
    { name: 'A', data: areaA },
    { name: 'B', data: areaB }
  ];

  const [rangeX, setRangeX] = useState({ min: 0, max: 100 });
  const [rangeY, setRangeY] = useState({ min: 0, max: 100 });

  useEffect(() => {
    setRangeX({ ...rangeX, max: data[0].data.length });
  }, []);

  const chartData = generateAreaChartData(data);
  const chartOptions = generateAreaChartOptions({
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
            <Line data={chartData} options={chartOptions} />
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

export default RangeArea;
