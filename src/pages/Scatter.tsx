import { useEffect, useState } from 'react';
import BasicScatter from '../components/chart/scatter/Basic';
import RangeScatter from '../components/chart/scatter/Range';
import RealtimeScatter from '../components/chart/scatter/Realtime';
import { resetScatterChartRealtimeADataAPI, resetScatterChartRealtimeBDataAPI } from '../api/Reset';

const ScatterChartPage = () => {
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    const resetData = async () => {
      await Promise.all([resetScatterChartRealtimeADataAPI(), resetScatterChartRealtimeBDataAPI()]);
    };

    resetData();
    setIsReset(true);
  }, []);

  return (
    <>
      {isReset && (
        <>
          <BasicScatter />
          <RealtimeScatter />
          <RangeScatter />
        </>
      )}
    </>
  );
};

export default ScatterChartPage;
