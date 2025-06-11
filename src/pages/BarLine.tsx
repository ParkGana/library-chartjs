import BasicBarLine from '../components/chart/barline/Basic';
import RealtimeSlideBarLine from '../components/chart/barline/RealtimeSlide';
import RealtimeStackBarLine from '../components/chart/barline/RealtimeStack';

const BarLineChartPage = () => {
  return (
    <>
      <BasicBarLine />
      <RealtimeStackBarLine />
      <RealtimeSlideBarLine />
    </>
  );
};

export default BarLineChartPage;
