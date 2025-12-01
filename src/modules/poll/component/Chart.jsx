// Chart.jsx
import { useEffect, useState } from "react";
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
import { options } from "../../../stylesheets/chart.js";
import {
  gettingchartData,
  getchartData,
} from "../../../shared/services/chartData.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ question, option1, option2, option3, option4, reload }) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadChartData() {
    setLoading(true);
    const q = question || localStorage.getItem("question");
    const obj = await gettingchartData(q);
    const processed = getchartData(obj);

    setTimeout(() => {
      setChartData(processed);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    loadChartData();
  }, [reload]);

  return (
    <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
      {loading && (
        <div
          style={{
            color: "#275944",
            fontSize: "1.2rem",
            fontWeight: 500,
            opacity: 0.85,
            fontFamily: "Poppins",
          }}
        >
          Loading Results...
        </div>
      )}
      {!loading && chartData && <Bar data={chartData} options={options} />}
    </div>
  );
}
