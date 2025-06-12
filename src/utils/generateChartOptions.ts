/* Area 차트 */
export const generateAreaChartOptions = () => ({
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

/* Bar 차트 */
export const generateBarChartOptions = ({
  minX,
  maxX,
  minY,
  maxY
}: {
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
}) => ({
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
      min: minY ?? 0,
      max: maxY ?? 100,
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
export const generateLineChartOptions = ({
  minX,
  maxX,
  minY,
  maxY
}: {
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
}) => ({
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
      min: minY ?? 0,
      max: maxY ?? 100,
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
export const generateBarLineChartOptions = ({
  minX,
  maxX,
  minY,
  maxY
}: {
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
}) => ({
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
      min: minY ?? 0,
      max: maxY ?? 100,
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
