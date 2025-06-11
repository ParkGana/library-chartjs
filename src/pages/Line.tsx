import BasicLine from '../components/chart/line/Basic';
import RealtimeSlideLine from '../components/chart/line/RealtimeSlide';
import RealtimeStackLine from '../components/chart/line/RealtimeStack';

const LineChartPage = () => {
  return (
    <>
      <BasicLine />
      <RealtimeStackLine />
      <RealtimeSlideLine />
    </>
  );
};

export default LineChartPage;
