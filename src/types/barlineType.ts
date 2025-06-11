export type BarLineChartDataType = {
  name: string;
  data: {
    id: string;
    xlabel: string;
    value: number;
  }[];
  type: 'bar' | 'line';
};
