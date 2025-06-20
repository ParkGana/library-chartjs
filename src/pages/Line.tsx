import { useEffect, useState } from 'react';
import BasicLine from '../components/chart/line/Basic';
import RangeLine from '../components/chart/line/Range';
import RealtimeSlideLine from '../components/chart/line/RealtimeSlide';
import RealtimeStackLine from '../components/chart/line/RealtimeStack';
import {
  resetLineChartRealtimeSlideADataAPI,
  resetLineChartRealtimeSlideBDataAPI,
  resetLineChartRealtimeStackADataAPI,
  resetLineChartRealtimeStackBDataAPI
} from '../api/Reset';

const LineChartPage = () => {
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    const resetData = async () => {
      await Promise.all([
        resetLineChartRealtimeStackADataAPI(),
        resetLineChartRealtimeStackBDataAPI(),
        resetLineChartRealtimeSlideADataAPI(),
        resetLineChartRealtimeSlideBDataAPI()
      ]);
    };

    resetData();
    setIsReset(true);
  }, []);

  return (
    <>
      {isReset && (
        <>
          <BasicLine />
          <RealtimeStackLine />
          <RealtimeSlideLine />
          <RangeLine />
        </>
      )}
    </>
  );
};

export default LineChartPage;
