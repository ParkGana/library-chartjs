import BasicBarLine from '../components/chart/barline/Basic';
import RangeBarLine from '../components/chart/barline/Range';
import RealtimeSlideBarLine from '../components/chart/barline/RealtimeSlide';
import RealtimeStackBarLine from '../components/chart/barline/RealtimeStack';

const BarLineChartPage = () => {
  return (
    <>
      <BasicBarLine />
      <RealtimeStackBarLine />
      <RealtimeSlideBarLine />
      <RangeBarLine />
    </>
  );
};

export default BarLineChartPage;
