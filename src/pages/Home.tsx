import Thumbnail from '../components/layout/Thumbnail';

const HomePage = () => {
  return (
    <>
      <Thumbnail type="area" />
      <Thumbnail type="bar" />
      <Thumbnail type="doughnut" />
      <Thumbnail type="line" />
      <Thumbnail type="pie" />
      <Thumbnail type="scatter" />
      <Thumbnail type="bar + line" />
    </>
  );
};

export default HomePage;
