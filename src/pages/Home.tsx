import Thumbnail from '../components/layout/Thumbnail';

const HomePage = () => {
  return (
    <>
      <Thumbnail type="area" />
      <Thumbnail type="bar" />
      <Thumbnail type="bubble" />
      <Thumbnail type="doughnut" />
      <Thumbnail type="line" />
      <Thumbnail type="pie" />
      <Thumbnail type="polar" />
      <Thumbnail type="radar" />
      <Thumbnail type="scatter" />
      <Thumbnail type="bar + line" />
      <Thumbnail type="bar + list" />
    </>
  );
};

export default HomePage;
