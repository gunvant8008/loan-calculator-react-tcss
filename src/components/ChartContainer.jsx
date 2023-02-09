import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const ChartContainer = ({ loan }) => {
  return (
    <div className="w-[50%]">
      <Pie
        data={{
          labels: ["Total Interest", "Loan Amount"],
          datasets: [
            {
              data: [loan.interestSum, loan.amount],
              backgroundColor: ["red", "blue"]
            }
          ]
        }}
        width={"100%"}
        height={"100%"}
      />
    </div>
  )
}

export default ChartContainer
