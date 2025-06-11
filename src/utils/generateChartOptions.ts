/* Bar 차트 */
export const generateBarChartOptions = ({ minX, maxX }: { minX?: string; maxX?: string }) => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    ...(minX &&
      maxX && {
        x: {
          type: 'category' as const,
          min: minX,
          max: maxX
        }
      }),
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Line 차트 */
export const generateLineChartOptions = ({ minX, maxX }: { minX?: string; maxX?: string }) => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    ...(minX &&
      maxX && {
        x: {
          type: 'category' as const,
          min: minX,
          max: maxX
        }
      }),
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Bar + Line 차트 */
export const generateBarLineChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});
