import { useContext, useEffect, useState } from "react";
import Chart from "../component/Chart";
import Poll from "../component/poll";
import { Routing } from "../../../context/Routing";


export default function LetsPollit() {
    const { displayPoll } = useContext(Routing)
    return (
        <div style={{ display: displayPoll ? "block" : "none" }}>
            <Poll />
            <Chart  />
        </div>
    )
}