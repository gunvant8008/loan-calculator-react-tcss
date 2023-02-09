import React from "react"
import ChartContainer from "./ChartContainer"
import TableContainer from "./TableContainer"

const ResultContainer = ({ loan, data }) => {
  return (
    <div className="w-[80%] flex flex-col justify-center p-5 items-center md:flex-row gap-8 mt-4">
      <TableContainer loan={loan} data={data} />
      <ChartContainer loan={loan} />
    </div>
  )
}

export default ResultContainer
