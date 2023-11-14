import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const data = {
    labels: ["Não-Convertido", "Convertido", "Pendente"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['#B22222', '#98FB98', '#FFA500'],
        hoverBackgroundColor: ['#A52A2A', '#90EE90', '#FF8C00'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
