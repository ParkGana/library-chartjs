import { Color, PaleColor } from '../styles/color';
import type {
  AreaChartDataType,
  BarChartDataType,
  BarLineChartDataType,
  LineChartDataType,
  PieChartDataType
} from '../types/chartType';

/* Area 차트 */
export const generateAreaChartData = (data: AreaChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    fill: true,
    backgroundColor: PaleColor[index],
    borderColor: Color[index],
    borderWidth: 2,
    pointRadius: 0,
    tension: 0.3
  }))
});

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

/* Pie 차트 */
export const generatePieChartData = (data: PieChartDataType[]) => ({
  labels: data.map(({ name }) => name),
  datasets: [
    {
      data: data.map(({ value }) => value),
      backgroundColor: Color.slice(0, data.length),
      borderWidth: 0
    }
  ]
});

/* Bar + Line 차트 */
export const generateBarLineChartData = (data: BarLineChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data, type }, index) => ({
    type,
    label: name,
    data: data.map(({ value }) => value),
    ...(type === 'bar' && {
      backgroundColor: Color[index]
    }),
    ...(type === 'line' && {
      borderColor: Color[index],
      borderWidth: 2,
      pointBackgroundColor: Color[index],
      pointRadius: 2,
      pointHoverRadius: 3,
      tension: 0
    })
  }))
});
