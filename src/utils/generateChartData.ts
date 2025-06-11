import { Color } from '../styles/color';
import type { BarChartDataType } from '../types/barType';

/* Bar 차트 */
export const generateBarChartData = (data: BarChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    backgroundColor: Color[index]
  }))
});
