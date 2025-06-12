import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BarChartPage from './pages/Bar';
import LineChartPage from './pages/Line';
import BarLineChartPage from './pages/BarLine';
import AreaChartPage from './pages/Area';
import PieChartPage from './pages/Pie';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/area" element={<AreaChartPage />} />
      <Route path="/bar" element={<BarChartPage />} />
      <Route path="/line" element={<LineChartPage />} />
      <Route path="/pie" element={<PieChartPage />} />
      <Route path="/barline" element={<BarLineChartPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
