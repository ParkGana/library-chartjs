/* Area 차트 */
export type AreaChartDataType = {
  name: string;
  data: {
    id: string;
    xlabel: string;
    value: number;
  }[];
};

/* Bar 차트 */
export type BarChartDataType = {
  name: string;
  data: {
    id: string;
    xlabel: string;
    value: number;
  }[];
};

/* Doughnut 차트 */
export type DoughnutChartDataType = {
  id: string;
  name: string;
  value: number;
};

/* Line 차트 */
export type LineChartDataType = {
  name: string;
  data: {
    id: string;
    xlabel: string;
    value: number;
  }[];
};

/* Pie 차트 */
export type PieChartDataType = {
  id: string;
  name: string;
  value: number;
};

/* Bar + Line 차트 */
export type BarLineChartDataType = {
  name: string;
  data: {
    id: string;
    xlabel: string;
    value: number;
  }[];
  type: 'bar' | 'line';
};
