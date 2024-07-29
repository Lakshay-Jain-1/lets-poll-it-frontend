import { useState } from "react"
import { useEffect } from "react"
import { pollAQuestion } from "../../../shared/services/api-client"


export default function Poll() {
    const [question, setQuestion] = useState()
    const [option1, setOption1] = useState()
    const [option2, setOption2] = useState()
    const [option3, setOption3] = useState()
    const [option4, setOption4] = useState()

    useEffect(() => {
        setQuestion(localStorage.getItem("question"))
        setOption4(localStorage.getItem("option4"))
        setOption1(localStorage.getItem("option1"))
        setOption2(localStorage.getItem("option2"))
        setOption3(localStorage.getItem("option3"))

      //Don't change this as this is used to find which button is clicked
        document.querySelectorAll("button").forEach((ele) => {
            ele.addEventListener("click", (event) => {
                event.target.style.backgroundColor = "red"
            })
        })
    })

    function handlePoll() {
        let submit = 0
        console.log(1)
        document.querySelectorAll("button").forEach((ele) => {

            if (ele.style.backgroundColor == "red" && submit == 0) {
                submit += 1
                pollit(question, ele.innerText)
            }
        })


    }

    async function pollit(question, option) {
        await pollAQuestion(question, option)
    }

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()} style={{ width: "400px" }} >
                <h1>{question}</h1>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto" }} >
                    <button> {option1} </button>
                    <button> {option2} </button>
                    <button> {option3} </button>
                    <button> {option4} </button>
                </div>
                <button onClick={handlePoll} >Submit</button>
            </form>

        </>
    )


}