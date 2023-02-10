import React, { useState } from "react"

function EmiTable({ loan }) {
  return (
    <table className="bg-white w-[80%]">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            EMI NO.
          </th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            EMI AMOUNT
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            INTEREST PAID
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            PRINCIPAL PAID
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            REMAINING
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {loan.installments.map((emi, index) => {
          return (
            <tr key={index}>
              <td className="w-1/3 text-left py-3 px-4">{index + 1}</td>
              <td className="w-1/3 text-left py-3 px-4">
                ${emi.installment.toFixed(2)}
              </td>
              <td className="text-left py-3 px-4">
                ${emi.interest.toFixed(2)}
              </td>
              <td className="text-left py-3 px-4">${emi.capital.toFixed(2)}</td>
              <td className="text-left py-3 px-4">${emi.remain.toFixed(2)}</td>
            </tr>
          )
        })}
        <tr className="bg-black text-white">
          <td className="w-1/3 text-left py-3 px-4">TOTAL</td>
          <td className="w-1/3 text-left py-3 px-4">-</td>
          <td className="text-left py-3 px-4">${loan.interestSum}</td>
          <td className="text-left py-3 px-4">${loan.amount}</td>
          <td className="text-left py-3 px-4">${loan.sum}</td>
        </tr>
      </tbody>
    </table>
  )
}

const EmiContainer = ({ loan }) => {
  const [emiSchedule, setEmiSchedule] = useState(false)

  return (
    <div className="text-center p-5 flex flex-col gap-5 items-center justify-center m-auto w-[80%]">
      <button
        className="bg-orange-700 text-yellow-100 font-bold p-2"
        onClick={() => setEmiSchedule(!emiSchedule)}
      >
        GENERATE EMI SCHEDULE
      </button>
      {emiSchedule && <EmiTable loan={loan} />}
    </div>
  )
}

export default EmiContainer
