import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const ChartContainer = ({ loan }) => {
  return (
    <div className="">
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
        width={300}
        height={300}
      />
    </div>
  )
}

export default ChartContainer
