
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ object }) => {
  const chartData = {
    labels: Object.keys(object),
    datasets: [
      {
        label: "Votes",
        data: Object.values(object),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "whitesmoke",
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: "Poll Results",
        font: {
          size: 24,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          weight: "bold",
        },
        color: "whitesmoke",
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
        caretSize: 8,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "whitesmoke",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "whitesmoke",
          font: {
            size: 14,
          },
          stepSize: 1, // Ensure the y-axis labels increment by 1
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 2,
      },
    },
  };

  const divStyle = {
    position: "absolute",
    height: "600px",
    width: "400px",
    right: "5%",
    top: "30%",
  };
  return (
    <div style={divStyle}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Chart;
