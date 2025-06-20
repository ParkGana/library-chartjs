import { useEffect, useState } from 'react';
import BasicBar from '../components/chart/bar/Basic';
import RangeBar from '../components/chart/bar/Range';
import RealtimeSlideBar from '../components/chart/bar/RealtimeSlide';
import RealtimeStackBar from '../components/chart/bar/RealtimeStack';
import StackBar from '../components/chart/bar/Stack';
import {
  resetBarChartRealtimeSlideADataAPI,
  resetBarChartRealtimeSlideBDataAPI,
  resetBarChartRealtimeStackADataAPI,
  resetBarChartRealtimeStackBDataAPI
} from '../api/Reset';

const BarChartPage = () => {
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    const resetData = async () => {
      await Promise.all([
        resetBarChartRealtimeStackADataAPI(),
        resetBarChartRealtimeStackBDataAPI(),
        resetBarChartRealtimeSlideADataAPI(),
        resetBarChartRealtimeSlideBDataAPI()
      ]);
    };

    resetData();
    setIsReset(true);
  }, []);

  return (
    <>
      {isReset && (
        <>
          <BasicBar />
          <StackBar />
          <RealtimeStackBar />
          <RealtimeSlideBar />
          <RangeBar />
        </>
      )}
    </>
  );
};

export default BarChartPage;
