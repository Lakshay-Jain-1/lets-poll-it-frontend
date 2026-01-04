// chart.js
const refreshButtonStyle = {
  height: "45px",
  color: "white",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 191, 111, 0.85)",
  border: "1px solid rgba(0, 191, 111)",
  fontSize: "1rem",
  cursor: "pointer",
  width: "150px",
  margin: "20px auto",
  display: "block",
};

const divStyle = {
  width: "100%", // Ensure it takes available space
  maxWidth: "600px",
  margin: "20px auto", // Reduced top margin
  padding: "0 10px", // Add padding so chart doesn't touch screen edge
  boxSizing: "border-box"
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "black",
        font: { size: 16 },
      },
    },
    title: {
      display: false,
      text: "Poll Results",
      font: { size: 24, weight: "bold" },
      color: "whitesmoke",
      padding: { bottom: 20 },
    },
    tooltip: {
      backgroundColor: "#333",
      titleColor: "white",
      bodyColor: "white",
      borderColor: "black",
      borderWidth: 1,
      caretSize: 8,
      callbacks: {
        label: (context) => `${context.label}: ${context.raw}`,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "black", font: { size: 14 } },
      grid: { color: "rgba(0, 0, 0, 0.1)" },
    },
    y: {
      ticks: { color: "black", font: { size: 14 } },
      grid: { color: "rgba(0, 0, 0, 0.1)" },
      beginAtZero: true,
    },
  },
};

export { options, divStyle, refreshButtonStyle };
