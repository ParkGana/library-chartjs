import BasicBubble from '../components/chart/bubble/Basic';
import RangeBubble from '../components/chart/bubble/Range';
import RealtimeBubble from '../components/chart/bubble/Realtime';

const BubbleChartPage = () => {
  return (
    <>
      <BasicBubble />
      <RealtimeBubble />
      <RangeBubble />
    </>
  );
};

export default BubbleChartPage;
