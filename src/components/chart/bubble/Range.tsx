import { PointElement, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { useState } from 'react';
import ChartContainer from '../../layout/ChartContainer';
import { useBubble } from '../../../hooks/query/useBubble';
import { generateBubbleChartData } from '../../../utils/generateChartData';
import { generateBubbleChartOptions } from '../../../utils/generateChartOptions';
import VerticalRangebar from '../../rangebar/VerticalRangebar';
import HorizontalRangebar from '../../rangebar/HorizontalRangebar';

Chart.register(LinearScale, PointElement, Tooltip, Legend);

const RangeBubble = () => {
  const {
    fetchBubbleChartDataQuery: { data, isPending, isError }
  } = useBubble();

  const [rangeX, setRangeX] = useState({ min: 0, max: 100 });
  const [rangeY, setRangeY] = useState({ min: 0, max: 100 });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const chartData = generateBubbleChartData(data);
  const chartOptions = generateBubbleChartOptions({
    minX: rangeX.min,
    maxX: rangeX.max,
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
            <Bubble data={chartData} options={chartOptions} />
            <div className="h-6 pt-3 px-2 py-1">
              <HorizontalRangebar
                range={{ min: 0, max: 100 }}
                value={{ min: rangeX.min, max: rangeX.max }}
                step={20}
                handleChange={setRangeX}
              />
            </div>
          </div>
        </div>
      </div>
    </ChartContainer>
  );
};

export default RangeBubble;
