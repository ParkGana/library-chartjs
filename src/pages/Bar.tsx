import BasicBar from '../components/chart/bar/Basic';
import RangeBar from '../components/chart/bar/Range';
import RealtimeSlideBar from '../components/chart/bar/RealtimeSlide';
import RealtimeStackBar from '../components/chart/bar/RealtimeStack';

const BarChartPage = () => {
  return (
    <>
      <BasicBar />
      <RealtimeStackBar />
      <RealtimeSlideBar />
      <RangeBar />
    </>
  );
};

export default BarChartPage;
