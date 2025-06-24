import type {
  AreaChartOptionsType,
  BarChartOptionsType,
  BarLineChartOptionsType,
  BubbleChartOptionsType,
  LineChartOptionsType,
  ScatterChartOptionsType
} from '../types/chartOptionsType';

/* Area 차트 */
export const generateAreaChartOptions = ({ minX, maxX, minY, maxY }: AreaChartOptionsType) => ({
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
        stepSize: (maxY ?? 100) / 5
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
export const generateBarChartOptions = ({ stacked = false, minX, maxX, minY, maxY }: BarChartOptionsType) => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked,
      ...(minX &&
        maxX && {
          type: 'category' as const,
          min: minX,
          max: maxX
        })
    },
    y: {
      stacked,
      min: minY ?? 0,
      max: maxY ?? 100,
      ticks: {
        stepSize: (maxY ?? 100) / 5
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Bubble 차트 */
export const generateBubbleChartOptions = ({ minX, maxX, minY, maxY }: BubbleChartOptionsType) => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      min: minX ?? 0,
      max: maxX ?? 100,
      ticks: {
        stepSize: (maxX ?? 100) / 5
      }
    },
    y: {
      min: minY ?? 0,
      max: maxY ?? 100,
      ticks: {
        stepSize: (maxY ?? 100) / 5
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Doughnut 차트 */
export const generateDoughnutChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Line 차트 */
export const generateLineChartOptions = ({ minX, maxX, minY, maxY }: LineChartOptionsType) => ({
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
        stepSize: (maxY ?? 100) / 5
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Pie 차트 */
export const generatePieChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Polar 차트 */
export const generatePolarChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
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

/* Radar 차트 */
export const generateRadarChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
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

/* Scatter 차트 */
export const generateScatterChartOptions = ({ minX, maxX, minY, maxY }: ScatterChartOptionsType) => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      min: minX ?? 0,
      max: maxX ?? 100,
      ticks: {
        stepSize: (maxX ?? 100) / 5
      }
    },
    y: {
      min: minY ?? 0,
      max: maxY ?? 100,
      ticks: {
        stepSize: (maxY ?? 100) / 5
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
export const generateBarLineChartOptions = ({ minX, maxX, minY, maxY }: BarLineChartOptionsType) => ({
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
        stepSize: (maxY ?? 100) / 5
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
});

/* Bar + List 차트 */
export const generateBarListChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  scales: {
    x: {
      display: false
    },
    y: {
      ticks: {
        display: false
      },
      grid: {
        color: ({ index }: any) => (index === 0 ? 'transparent' : 'lightgray'),
        drawBorder: true,
        drawTicks: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        title: () => ''
      }
    }
  }
});
