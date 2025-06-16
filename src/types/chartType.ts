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

/* Bubble 차트 */
export type BubbleChartDataType = {
  name: string;
  data: {
    id: string;
    xvalue: number;
    yvalue: number;
    rvalue: number;
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

/* Polar 차트 */
export type PolarChartDataType = {
  id: string;
  name: string;
  value: number;
};

/* Radar 차트 */
export type RadarChartDataType = {
  name: string;
  data: {
    id: string;
    category: string;
    value: number;
  }[];
};

/* Scatter 차트 */
export type ScatterChartDataType = {
  name: string;
  data: {
    id: string;
    xvalue: number;
    yvalue: number;
  }[];
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
