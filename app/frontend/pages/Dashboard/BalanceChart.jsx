import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BalanceChart = () => {
  // Generate fake data for the last 14 days
  const generateData = () => {
    const data = [];
    const baseValue = 250;
    for (let i = 13; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        x: date.getTime(),
        y: (baseValue + Math.random() * 250 - 100).toFixed(2)
      });
    }
    return data;
  };

  const series = [{
    name: 'Balance',
    data: generateData()
  }];

  const options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 600,
      },
      fontFamily: 'Figtree, Inter, Helvetica, Arial, sans-serif'
    },
    colors: ['#44b381'], // Indigo color
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    grid: {
      borderColor: '#f1f1f1',
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#64748b'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toFixed(0)}`,
        style: {
          colors: '#64748b'
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      },
      y: {
        formatter: (value) => `$${value}`
      }
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg border border-zinc-200">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default BalanceChart;