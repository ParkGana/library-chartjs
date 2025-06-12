/* Area 차트 */
export type AreaChartDataType = {
  name: string;
  data: {
    xlabel: string;
    value: number;
  }[];
};

/* Bar 차트 */
export type BarChartDataType = {
  name: string;
  data: {
    xlabel: string;
    value: number;
  }[];
};

/* Doughnut 차트 */
export type DoughnutChartDataType = {
  name: string;
  value: number;
};

/* Line 차트 */
export type LineChartDataType = {
  name: string;
  data: {
    xlabel: string;
    value: number;
  }[];
};

/* Pie 차트 */
export type PieChartDataType = {
  name: string;
  value: number;
};

/* Bar + Line 차트 */
export type BarLineChartDataType = {
  name: string;
  data: {
    xlabel: string;
    value: number;
  }[];
  type: 'bar' | 'line';
};

/* Scatter 차트 */
export type ScatterChartDataType = {
  name: string;
  data: {
    xvalue: number;
    yvalue: number;
  }[];
};
