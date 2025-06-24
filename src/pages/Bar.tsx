import BasicBar from '../components/chart/bar/Basic';
import RangeBar from '../components/chart/bar/Range';
import RealtimeSlideBar from '../components/chart/bar/RealtimeSlide';
import RealtimeStackBar from '../components/chart/bar/RealtimeStack';
import StackBar from '../components/chart/bar/Stack';

const BarChartPage = () => {
  return (
    <>
      <BasicBar />
      <StackBar />
      <RealtimeStackBar />
      <RealtimeSlideBar />
      <RangeBar />
    </>
  );
};

export default BarChartPage;
