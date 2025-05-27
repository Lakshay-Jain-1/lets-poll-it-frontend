import { getAQuestionfromitsname } from "./api-client"

async function gettingchartData(question) {
    const data = await getAQuestionfromitsname(question)
    const obj = {}

    data[0].polled.forEach((ele) => {
        let value = ele["optionSelected"]
        obj[value] = (obj[value] || 0) + 1
    })
    console.log("object",obj)
    return obj
}

const getchartData = (chartdata)=>{
    return {
    labels: Object.keys(chartdata),
    datasets: [
      {
        label: "Votes",
        data: Object.values(chartdata),
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
  }
}

export {getchartData,gettingchartData}
