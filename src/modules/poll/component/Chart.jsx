
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from "chart.js";
import {options,divStyle,refreshButtonStyle} from "../../../stylesheets/chart.js"
import {gettingchartData,getchartData} from "../../../shared/services/chartData.js";

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const Chart = () => {
  const [chartdata, setchartdata] = useState({})
  let chartData = getchartData(chartdata)
  useEffect(()=>{
    chartData=getchartData(chartdata)
  },[chartdata])
  async function bardata() {
    let obj = await gettingchartData(localStorage.getItem("question"))
    setchartdata(obj)
  }
  return (
    <div style={divStyle}>
      <button
        onClick={(e) => bardata()}
        onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor =
          refreshButtonStyle.backgroundColor)
        }
        style={refreshButtonStyle}
      >
        Refresh The Poll
      </button>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Chart;
