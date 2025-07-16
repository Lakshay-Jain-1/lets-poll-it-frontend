import { useContext, useEffect, useState } from "react";
import Poll from "../component/poll";
import { Routing } from "../../../context/Routing";
import ChartModal from "../component/ChartModal";


export default function LetsPollit() {
    const { displayPoll } = useContext(Routing)
    return (
        <>
        <div style={{ display: displayPoll ? "block" : "none" }}>
            <Poll /> 
        </div> 
        <ChartModal/>
        </> 
    )
}