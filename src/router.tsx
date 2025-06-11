import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BarChartPage from './pages/Bar';
import LineChartPage from './pages/Line';
import BarLineChartPage from './pages/BarLine';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bar" element={<BarChartPage />} />
      <Route path="/line" element={<LineChartPage />} />
      <Route path="/barline" element={<BarLineChartPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
