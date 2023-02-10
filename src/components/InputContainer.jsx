import React from "react"

function Input({ title, dataPoints, range, value, onChange, step }) {
  return (
    <div className="flex flex-col space-y-2 p-2 w-[80%]">
      <label className="font-bold">
        {" "}
        {title}
        <span className="ml-4 p-1 rounded-ll text-orange-700">
          {title === "Loan Amount $" ? value + "k" : Number(value).toFixed(1)}
        </span>
        <input
          type="range"
          className="w-full"
          min={range[0]}
          max={range[1]}
          value={value}
          onChange={onChange}
          step={step}
        />
        <ul className="flex justify-between w-full px-[10px]">
          {dataPoints.map((point, index) => {
            return (
              <li key={index} className="flex justify-center relative">
                <span className="absolute text-gray-500 invisible md:visible">
                  {point}
                </span>
              </li>
            )
          })}
        </ul>
      </label>
    </div>
  )
}

const InputContainer = ({ ranges, setRanges }) => {
  const { amount, interest, tenure } = ranges
  const { setAmount, setInterest, setTenure } = setRanges
  return (
    <div className=" flex flex-col items-center p-8 shadow-lg gap-8 rounded-2xl bg-gray-300 backdrop-blur-[2px]">
      <Input
        title={"Loan Amount $"}
        dataPoints={["0", "$50k", "$100k", "$150k", "$200k", "$250k"]}
        range={[1, 250]}
        value={amount}
        onChange={e => setAmount(e.target.value)}
        step={"1"}
      />
      <Input
        title={"Interest Rate %"}
        dataPoints={["0", "5%", "10%", "15%", "20%", "25%"]}
        range={[1, 25]}
        value={interest}
        onChange={e => setInterest(e.target.value)}
        step={"0.1"}
      />
      <Input
        title={"Tenure (Years)"}
        dataPoints={["0", "10", "20", "30", "40", "50"]}
        range={[1, 50]}
        value={tenure}
        onChange={e => setTenure(e.target.value)}
        step={"1"}
      />
    </div>
  )
}

export default InputContainer
