import BasicBar from '../components/chart/bar/Basic';
import RealtimeSlideBar from '../components/chart/bar/RealtimeSlide';
import RealtimeStackBar from '../components/chart/bar/RealtimeStack';

const BarChartPage = () => {
  return (
    <>
      <BasicBar />
      <RealtimeStackBar />
      <RealtimeSlideBar />
    </>
  );
};

export default BarChartPage;
