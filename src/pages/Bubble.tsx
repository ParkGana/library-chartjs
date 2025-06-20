import { useEffect, useState } from 'react';
import BasicBubble from '../components/chart/bubble/Basic';
import RangeBubble from '../components/chart/bubble/Range';
import RealtimeBubble from '../components/chart/bubble/Realtime';
import { resetBubbleChartRealtimeADataAPI, resetBubbleChartRealtimeBDataAPI } from '../api/Reset';

const BubbleChartPage = () => {
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    const resetData = async () => {
      await Promise.all([resetBubbleChartRealtimeADataAPI(), resetBubbleChartRealtimeBDataAPI()]);
      setIsReset(true);
    };
    resetData();
  }, []);

  return (
    <>
      {isReset && (
        <>
          <BasicBubble />
          <RealtimeBubble />
          <RangeBubble />
        </>
      )}
    </>
  );
};

export default BubbleChartPage;
