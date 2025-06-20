import { useEffect, useState } from 'react';
import BasicArea from '../components/chart/area/Basic';
import RangeArea from '../components/chart/area/Range';
import RealtimeSlideArea from '../components/chart/area/RealtimeSlide';
import RealtimeStackArea from '../components/chart/area/RealtimeStack';
import {
  resetAreaChartRealtimeSlideADataAPI,
  resetAreaChartRealtimeSlideBDataAPI,
  resetAreaChartRealtimeStackADataAPI,
  resetAreaChartRealtimeStackBDataAPI
} from '../api/Reset';

const AreaChartPage = () => {
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    const resetData = async () => {
      await Promise.all([
        resetAreaChartRealtimeStackADataAPI(),
        resetAreaChartRealtimeStackBDataAPI(),
        resetAreaChartRealtimeSlideADataAPI(),
        resetAreaChartRealtimeSlideBDataAPI()
      ]);
      setIsReset(true);
    };
    resetData();
  }, []);

  return (
    <>
      {isReset && (
        <>
          <BasicArea />
          <RealtimeStackArea />
          <RealtimeSlideArea />
          <RangeArea />
        </>
      )}
    </>
  );
};

export default AreaChartPage;
