const refreshButtonStyle = {
  height: "45px",
  alignSelf: "center",
  color: "white",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 191, 111, 0.85)",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  fontSize: "1rem",
  cursor: "pointer",
  border: "1px solid rgba(0, 191, 111)",
  width: "150px",
  position: "absolute",
  top: "-15%",
  right: "0%",
};

const divStyle = {
  position: "absolute",
  height: "600px",
  width: "400px",
  right: "5%",
  top: "30%",
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

export { options, divStyle, refreshButtonStyle };
