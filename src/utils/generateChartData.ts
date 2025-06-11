import { Color } from '../styles/color';
import type { BarChartDataType } from '../types/barType';
import type { LineChartDataType } from '../types/lineType';

/* Bar 차트 */
export const generateBarChartData = (data: BarChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    backgroundColor: Color[index]
  }))
});

/* Line 차트 */
export const generateLineChartData = (data: LineChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    borderColor: Color[index],
    borderWidth: 2,
    pointBackgroundColor: Color[index],
    pointRadius: 2,
    pointHoverRadius: 3,
    tension: 0
  }))
});
