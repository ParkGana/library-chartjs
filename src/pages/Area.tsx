import BasicArea from '../components/chart/area/Basic';
import RealtimeSlideArea from '../components/chart/area/RealtimeSlide';
import RealtimeStackArea from '../components/chart/area/RealtimeStack';

const AreaChartPage = () => {
  return (
    <>
      <BasicArea />
      <RealtimeStackArea />
      <RealtimeSlideArea />
    </>
  );
};

export default AreaChartPage;
