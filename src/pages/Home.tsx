import Thumbnail from '../components/layout/Thumbnail';

const HomePage = () => {
  return (
    <>
      <Thumbnail type="bar" />
      <Thumbnail type="line" />
      <Thumbnail type="bar + line" />
    </>
  );
};

export default HomePage;
