import { useEffect, useState } from 'react';
import BasicBarLine from '../components/chart/barline/Basic';
import RangeBarLine from '../components/chart/barline/Range';
import RealtimeSlideBarLine from '../components/chart/barline/RealtimeSlide';
import RealtimeStackBarLine from '../components/chart/barline/RealtimeStack';
import {
  resetBarChartRealtimeSlideADataAPI,
  resetBarChartRealtimeSlideBDataAPI,
  resetBarChartRealtimeStackADataAPI,
  resetBarChartRealtimeStackBDataAPI,
  resetLineChartRealtimeSlideADataAPI,
  resetLineChartRealtimeSlideBDataAPI,
  resetLineChartRealtimeStackADataAPI,
  resetLineChartRealtimeStackBDataAPI
} from '../api/Reset';

const BarLineChartPage = () => {
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    const resetData = async () => {
      await Promise.all([
        resetBarChartRealtimeStackADataAPI(),
        resetBarChartRealtimeStackBDataAPI(),
        resetBarChartRealtimeSlideADataAPI(),
        resetBarChartRealtimeSlideBDataAPI(),
        resetLineChartRealtimeStackADataAPI(),
        resetLineChartRealtimeStackBDataAPI(),
        resetLineChartRealtimeSlideADataAPI(),
        resetLineChartRealtimeSlideBDataAPI()
      ]);
      setIsReset(true);
    };
    resetData();
  }, []);

  return (
    <>
      {isReset && (
        <>
          <BasicBarLine />
          <RealtimeStackBarLine />
          <RealtimeSlideBarLine />
          <RangeBarLine />
        </>
      )}
    </>
  );
};

export default BarLineChartPage;
