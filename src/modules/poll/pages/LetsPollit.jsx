import { useContext, useEffect, useState } from "react";
import Chart from "../component/Chart";
import Poll from "../component/poll";
import { Routing } from "../../../context/Routing";
import gettingchartData from "../../../shared/services/chartData";


export default function LetsPollit() {
    const { displayPoll } = useContext(Routing)
    const [chartdata, setchartdata] = useState({})
    useEffect(() => {
        
          bardata()
    }, [])
     
   async function bardata(){
      let obj =  await gettingchartData(localStorage.getItem("question"))
      setchartdata(obj)
   } 

    return (
        <div style={{ display: displayPoll ? "block" : "none" }}>
            <Poll />
            <Chart object={chartdata} />
        </div>
    )
}