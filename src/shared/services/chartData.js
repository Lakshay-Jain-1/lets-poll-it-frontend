import { getAQuestionfromitsname } from "./api-client"

export default async function gettingchartData(question) {
    const data = await getAQuestionfromitsname(question)
    const obj = {}

    data[0].polled.forEach((ele) => {
        let value = ele["optionSelected"]
        obj[value] = (obj[value] || 0) + 1
    })
    console.log("object",obj)
    return obj
}