import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import BarChartPage from './pages/Bar';
import LineChartPage from './pages/Line';
import BarLineChartPage from './pages/BarLine';
import AreaChartPage from './pages/Area';
import PieChartPage from './pages/Pie';
import DoughnutChartPage from './pages/Doughnut';
import ScatterChartPage from './pages/Scatter';
import BubbleChartPage from './pages/Bubble';
import RadarChartPage from './pages/Radar';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/area" element={<AreaChartPage />} />
      <Route path="/bar" element={<BarChartPage />} />
      <Route path="/bubble" element={<BubbleChartPage />} />
      <Route path="/doughnut" element={<DoughnutChartPage />} />
      <Route path="/line" element={<LineChartPage />} />
      <Route path="/pie" element={<PieChartPage />} />
      <Route path="/radar" element={<RadarChartPage />} />
      <Route path="/scatter" element={<ScatterChartPage />} />
      <Route path="/barline" element={<BarLineChartPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
