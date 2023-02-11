import { useState } from "react"
import InputContainer from "./components/InputContainer"
import ResultContainer from "./components/ResultContainer"
import EmiContainer from "./components/EmiContainer"
import LoanJS from "loanjs"

function App() {
  const [amount, setAmount] = useState(1)
  const [interest, setInterest] = useState(1)
  const [tenure, setTenure] = useState(1)

  const loan = new LoanJS.Loan(
    amount * 1000, // amount
    tenure * 12, // installments number
    interest // interest rate
  )
  // do calculations
  // console.log(loan)
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[400px] md:w-[800px]  p-4  bg-gradient-to-r from-slate-600 to-slate-300 shadow-xl shadow-black rounded">
        <h1 className="text-center font-bold p-4 text-lg md:text-3xl text-white border-2 m-8 shadow-xl shadow-gray-700">
          LOAN CALCULATOR APP
        </h1>

        <InputContainer
          ranges={{ amount, interest, tenure }}
          setRanges={{ setAmount, setInterest, setTenure }}
        />
        <ResultContainer loan={loan} data={{ interest, tenure }} />

        <EmiContainer loan={loan} />
      </div>
    </div>
  )
}

export default App
