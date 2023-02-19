import React from "react"

function ResultTable({ loan, data }) {
  console.log(loan)
  return (
    <table className=" bg-gray-50 table-fixed w-full">
      <tbody>
        <tr className=" border-gray-400 border-2">
          <td className="bg-slate-600 text-white font-bold p-2 w-[50%]">
            Loan Amount
          </td>
          <td className="text-right p-4 w-[50%]">
            ${loan.amount.toLocaleString()}
          </td>
        </tr>
        <tr className=" border-gray-400 border-2">
          <td className="bg-slate-600 text-white font-bold p-2 w-[50%]">
            Interest %
          </td>
          <td className="text-right p-4 w-[50%]">
            {Number(data.interest).toFixed(1)}
          </td>
        </tr>
        <tr className=" border-gray-400 border-2">
          <td className="bg-slate-600 text-white font-bold p-2 w-[50%]">
            Tenure- Months
          </td>
          <td className="text-right p-4 w-[50%]">{data.tenure * 12}</td>
        </tr>
        <tr className=" border-gray-400 border-2">
          <td className="bg-slate-600 text-white font-bold p-2 w-[50%]">
            EMI- Monthly
          </td>
          <td className="text-right p-4 w-[50%]">
            ${loan.installments[0].installment}
          </td>
        </tr>
        <tr className=" border-gray-400 border-2">
          <td className="bg-slate-600 text-white font-bold p-2 w-[50%]">
            Total Interest
          </td>
          <td className="text-right p-4 w-[50%]">
            ${loan.interestSum.toLocaleString()}
          </td>
        </tr>
        <tr className=" border-gray-400 border-2">
          <td className="bg-slate-600 text-white font-bold p-2 w-[50%]">
            Total Payment- Loan+Interest
          </td>
          <td className="text-right p-4 w-[50%]">
            ${loan.sum.toLocaleString()}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const TableContainer = ({ loan, data }) => {
  console.log(loan)
  return (
    <div className=" p-4  bg-slate-200 shadow-xl shadow-gray-700 rounded border-2 border-gray-500">
      <ResultTable loan={loan} data={data} />
    </div>
  )
}

export default TableContainer
