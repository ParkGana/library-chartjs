import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BarChartPage from './pages/Bar';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bar" element={<BarChartPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
