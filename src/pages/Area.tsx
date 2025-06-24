import BasicArea from '../components/chart/area/Basic';
import RangeArea from '../components/chart/area/Range';
import RealtimeSlideArea from '../components/chart/area/RealtimeSlide';
import RealtimeStackArea from '../components/chart/area/RealtimeStack';

const AreaChartPage = () => {
  return (
    <>
      <BasicArea />
      <RealtimeStackArea />
      <RealtimeSlideArea />
      <RangeArea />
    </>
  );
};

export default AreaChartPage;
