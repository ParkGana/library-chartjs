import BasicLine from '../components/chart/line/Basic';
import RangeLine from '../components/chart/line/Range';
import RealtimeSlideLine from '../components/chart/line/RealtimeSlide';
import RealtimeStackLine from '../components/chart/line/RealtimeStack';

const LineChartPage = () => {
  return (
    <>
      <BasicLine />
      <RealtimeStackLine />
      <RealtimeSlideLine />
      <RangeLine />
    </>
  );
};

export default LineChartPage;
