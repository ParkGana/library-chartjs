import BasicScatter from '../components/chart/scatter/Basic';
import RangeScatter from '../components/chart/scatter/Range';
import RealtimeScatter from '../components/chart/scatter/Realtime';

const ScatterChartPage = () => {
  return (
    <>
      <BasicScatter />
      <RealtimeScatter />
      <RangeScatter />
    </>
  );
};

export default ScatterChartPage;
