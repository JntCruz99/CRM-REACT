import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
    const data = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      datasets: [
        {
          label: '', // Deixe o label vazio para não exibir na legenda
          data: [0, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55],
          fill: true,
          borderColor: "#006400",
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          type: 'linear',
          position: 'left',
        },
      },
      plugins: {
        legend: {
          display: false, // Define para não exibir a legenda
        },
      },
    };
  
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default ChartComponent;